function createContainer() {
	const div = document.createElement('div');
	div.classList.add("container");
	return div;
}
const nav = (() => {
	// let navContent = {
// 
	// }
	function addItem(text) {
		let item = document.createElement("li");
		item.innerText = text;
		item.classList.add("nav-item");
		return item;
	} 

	function create() {
		let nav = document.createElement("nav");
		let ul = document.createElement("ul");
		nav.setAttribute("id", "nav-bar");
		ul.setAttribute("id", "nav-list");

		ul.appendChild(addItem("Home"));
		ul.appendChild(addItem("Menu"));
		ul.appendChild(addItem("Contact"));

		nav.appendChild(ul);
		return nav;
	}

	return {
		create,
	}
})();

export {
	createContainer,
	nav,
};