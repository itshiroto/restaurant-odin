import {createContainer} from './includes.js';
import menu from './data/menu.json';
import './css/menu.css';

function init() {
	const grid = document.createElement('section');
	grid.setAttribute('id', 'menu');
	return grid;
}

const card = (() => {
	const addText = (name, desc) => {
		const base = document.createElement('div');
		const nameDOM = document.createElement('h2');
		const descDOM = document.createElement('p');
		nameDOM.innerText = name;
		descDOM.innerText = desc;
		nameDOM.classList.add("item-name");
		descDOM.classList.add("item-desc");
		base.classList.add("item-text");
		base.append(nameDOM, descDOM);
		return base;
	}
	const addImg = (img) => {
		if (img == undefined) return "";
		const imgDOM = new Image();
		imgDOM.src = require('./img/' + img);
		return imgDOM;
	}
	const create = (item) => {
		const card = document.createElement('div');
		card.classList.add("menu-item")
		card.append(addImg(item.img),addText(item.name, item.desc));
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