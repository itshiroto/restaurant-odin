import home from './home.js';
import menu from './menu.js';
import {nav} from './includes.js';

import 'normalize.css';
import './css/style.css';
import './css/nav.css';

"use strict";

const DOM = (() => {
	const body = document.getElementsByTagName('body')[0];
	const main = document.querySelector('#content');
	const render = (item) => {
		item = item.toLowerCase();
		if (main.innerHTML) {
			main.innerHTML = "";
		}
		switch (item) {
			case 'home': main.appendChild(home()); break;
			case 'menu': main.appendChild(menu()); break;
			default: console.warn("There's no element with that name"); break;
		}
	}
	const init = () => {
		body.prepend(nav.create());
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

DOM.render("menu")