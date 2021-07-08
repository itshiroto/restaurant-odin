import * as home from './home.js';
import {nav} from './main.js';
import './style.css';
"use strict";

const DOM = (() => {
	const main = document.querySelector('#content');
	const render = (item) => {
		main.appendChild(item);
	}
	return {
		render,
	}
})();

window.onload = () => {
	DOM.render(nav.create())
	DOM.render(home.render());
}