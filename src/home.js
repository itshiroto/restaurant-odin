import {createContainer} from './includes.js';

function createTitle() {
	const header = document.createElement('header');
	const title = document.createElement('h1');
	const subtitle = document.createElement('p');
	const container = createContainer();

	title.setAttribute("id", "title");
	subtitle.setAttribute("id", "sub-title");
	header.setAttribute("id", "header");

	title.innerText = "The Nusantara Spices";
	subtitle.innerHTML = "High class Indonesian Restaurant, <br>with affordable price.";

	container.appendChild(title);
	container.appendChild(subtitle);

	header.appendChild(container);
	return header;
}

function render() {
	const main = document.createElement('div');
	main.setAttribute("id", "home");
	main.appendChild(createTitle());
	return main;
}

export default render;

