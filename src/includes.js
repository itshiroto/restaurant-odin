import {DOM} from './index.js';

function createDOM(element, cls) {
	const base = document.createElement(element);
	if (cls) {
		base.classList.add(cls);
	} 
	return base;
}

function createContainer() {
	return createDOM("div", "container");
}

const nav = (() => {
	let navContent = [
		"Home",
		"Menu",
		"Contact",
	]

	function addItem(text) {
		let link = document.createElement("a")
		let item = document.createElement("li");
		link.innerText = text;
		item.href = "#";
		item.addEventListener("click", () => DOM.render(text))
		item.appendChild(link);
		item.classList.add("nav-item");
		return item;
	} 

	function create() {
		let nav = document.createElement("nav");
		let ul = document.createElement("ul");
		nav.setAttribute("id", "nav-bar");
		ul.setAttribute("id", "nav-list");

		navContent.forEach(item => ul.appendChild(addItem(item)));

		nav.appendChild(ul);
		return nav;
	}

	return {
		create,
	}
})();

export {
	createContainer,
	createDOM,
	nav,
};