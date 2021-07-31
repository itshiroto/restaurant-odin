import {createContainer, createDOM} from './includes.js';
import menu from './data/menu.json';
import './css/menu.css';

const list = (() => {
	const init = () => {
		const grid = document.createElement('section');
		grid.setAttribute('id', 'menu-list');
		return grid;
	}
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
	const createCard = (item) => {
		const card = document.createElement('div');
		card.classList.add("menu-item")
		card.append(addImg(item.img), addText(item));
		return card;
	}

	const render = () => {
		const base = init();
		menu.forEach(item => base.appendChild(createCard(item)));
		return base;
	}
	
	return {
		render
	}
})();

const title = (() => {
	const createHeading = () => {
		const heading = createDOM('h1');
		heading.setAttribute ('id', "menu-title")
		heading.innerText = "Menu";
		return heading;
	}
	const createDesc = () => {
		const desc = createDOM('p');
		desc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		desc.setAttribute('id', "menu-subtitle");
		return desc;

	}
	const render = () => {
		const base = createDOM("section");
		base.setAttribute('id', "menu-greeter")
		base.append(createHeading(), createDesc());
		return base;
	}
	return {
		render
	}
})()



const render = () => {
	const page = createContainer();
	page.setAttribute('id', 'menu-page');
	page.appendChild(title.render())
	page.appendChild(list.render());
	return page;
}

export default render