import {createContainer} from './includes.js';
import menu from './data/menu.json';
import './css/menu.css';

function init() {
	const grid = document.createElement('section');
	grid.setAttribute('id', 'menu');
	return grid;
}

function addMenu(item) {
	const card = document.createElement('div');
	const name = document.createElement('h2');
	const desc = document.createElement('p');
	const txtParent = document.createElement('div');

	name.innerText = item.name;
	desc.innerText = item.desc;

	card.classList.add("menu-item")
	name.classList.add("item-name");
	desc.classList.add("item-desc");
	txtParent.classList.add("item-text");

	txtParent.append(name, desc);
	if (item.img){
		const img = new Image();
		img.src = require('./img/' + item.img);
		card.prepend(img)
	}
	card.append(txtParent);
	return card;
}

function render() {
	const base = init();
	menu.forEach(item => {
		base.appendChild(addMenu(item));
	})
	const container = createContainer();
	container.appendChild(base);
	return container;
}

export default render;