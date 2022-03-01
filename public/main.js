import { menuPage, configApp }from './menu.js';

const root = document.getElementById('root');

export function ajax(method, url, body = null, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.withCredentials = true;

	xhr.addEventListener('readystatechange', function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;

		callback(xhr.status, xhr.responseText);
	});

	if (body) {
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf8');
		xhr.send(JSON.stringify(body));
		return;
	}

	xhr.send();
}

menuPage();

root.addEventListener('click', (e) => {
	const {target} = e;

	if (target instanceof HTMLElement) {
		e.preventDefault();

		const {section} = target.dataset;
		if (section) {
			configApp[section].openMethod();
		}
	}

});
