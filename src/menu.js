import {createContainer, createDOM} from './includes.js';
import menu from './data/menu.json';
import './css/menu.css';

function init() {
	const grid = document.createElement('section');
	grid.setAttribute('id', 'menu');
	return grid;
}

const card = (() => {
	const addText = (name, desc) => {
		const base = createDOM('div', "item-text");
		const nameDOM = createDOM('h2', "item-name");
		const descDOM = createDOM('p', "item-desc");
		nameDOM.innerText = name;
		descDOM.innerText = desc;
		base.append(nameDOM, descDOM);
		return base;
	}
	const addImg = (img) => {
		if (img == undefined) return "";
		const parent = createDOM('div', "img-base");
		const imgDOM = new Image();
		imgDOM.src = require('./img/' + img);
		parent.append(imgDOM);
		return parent;
	}
	const create = (item) => {
		const card = document.createElement('div');
		card.classList.add("menu-item")
		card.append(addImg(item.img), addText(item.name, item.desc));
		return card;
	}
	return {
		create,
	}
})()

function render() {
	const base = init();
	menu.forEach(item => base.appendChild(card.create(item)))
	const container = createContainer();
	container.appendChild(base);
	return container;
}

export default render;