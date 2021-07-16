import {createContainer, createDOM} from './includes.js';
import menu from './data/menu.json';
import './css/menu.css';

function init() {
	const grid = document.createElement('section');
	grid.setAttribute('id', 'menu');
	return grid;
}

const card = (() => {
	const addTitle = (name, price) => {
		const parent = createDOM('div', "item-title")
		const nameDOM = createDOM('h2', "item-name");
		const priceDOM = createDOM('p', "item-price")
		nameDOM.innerText = name;
		priceDOM.innerText = '$' + price;
		parent.append(nameDOM, priceDOM);
		return parent
	}

	const addDesc = (desc) => {
		const descDOM = createDOM('p', "item-desc");
		descDOM.innerText = desc;
		return descDOM;
	}
	const addText = (item) => {
		const base = createDOM('div', "item-text");
		const nameDOM = addTitle(item.name, item.price);
		const descDOM = addDesc(item.desc);
		base.append(nameDOM, descDOM);
		return base;
	}
	const addImg = (img) => {
		if (img == undefined || !img) return "";
		const parent = createDOM('div', "img-base");
		const imgDOM = new Image();
		imgDOM.src = require('./img/' + img);
		parent.append(imgDOM);
		return parent;
	}
	const create = (item) => {
		const card = document.createElement('div');
		card.classList.add("menu-item")
		card.append(addImg(item.img), addText(item));
		return card;
	}
	return {
		create,
	}
})();

function render() {
	const base = init();
	menu.forEach(item => base.appendChild(card.create(item)));
	const container = createContainer();
	container.appendChild(base);
	return container;
}

export default render;