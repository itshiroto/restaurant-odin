import home from './home.js';
import {nav} from './includes.js';
import './style.css';
"use strict";

const DOM = (() => {
	const main = document.querySelector('#content');
	const body = document.getElementsByTagName("body")[0];
	const render = (item) => {
		item = item.toLowerCase();
		if (main.innerHTML) {
			main.innerHTML = "";
		}
		switch (item) {
			case 'home': main.appendChild(home()); break;
			default: console.warn("There's no element with that name"); break;
		}
		
	}
	const init = () => {
		body.appendChild(nav.create());
		render("home");
	}
	return {
		init,
		render,
	}
})();

DOM.init()
export {
	DOM
}