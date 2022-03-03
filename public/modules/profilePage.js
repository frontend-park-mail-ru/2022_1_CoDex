import { ajax } from "../utils/ajax.js";

export function profilePage() {
	root.innerHTML = '';

	ajax(
		'GET',
		'/me',
		null,
		(status, responseText) => {
			let isAuthorized = false;
			if (status === 200) {
				isAuthorized = true;
			}


			if (isAuthorized) {
				const {age, score, images} = JSON.parse(responseText);

				const span = document.createElement('span');
				span.textContent = `Мне ${age} лет и я крутой на ${score} очков`;

				root.appendChild(span);

				const back = document.createElement('a');
				back.textContent = 'назад';
				back.href = 'back';
				back.dataset.section = 'menu';

				root.appendChild(back);

				if (images && Array.isArray(images)) {
					const div = document.createElement('div');
					root.appendChild(div);

					images.forEach((imageSrc) => {
						div.innerHTML += `<img src="${imageSrc}" width="200"/>`
					});
				}

				return;
			}

			alert('АХТУНГ, НЕТ АВТОРИЗАЦИИ');
			loginPage();
		}
	)
}
