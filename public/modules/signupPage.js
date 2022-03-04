import { ajax } from "../utils/ajax.js";
import { clearContent } from "../utils/contentManipulate.js";
import { createAuth } from "../components/auth/auth.js";

export function signupPage(warning = 0) {
    const content = clearContent();

    const signupContent = document.createElement("div");
    signupContent.classList.add("signup-content");
    const div = document.createElement("div");
    div.classList.add("signup");

    const signupInvitation = document.createElement("div");
    signupInvitation.classList.add("signup__invitation");
    signupInvitation.textContent = "Зарегистрироваться";
    div.appendChild(signupInvitation);

    const form = createAuth(false);
    div.appendChild(form);
    content.appendChild(div);
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        ajax(
            'POST',
            '/login',
            { email, password },
            (status => {
                if (status === 200) {
                    alert('All good');
                    // FilmPage(); //
                    return;
                }
                if (status === 400) {
                    alert('Input ur data bruh');
                    loginPage(false);
                    return;
                }
                if (status === 401) {
                    loginPage(true);
                    return;
                }
            })
        )
    });
}
