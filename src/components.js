import "./css/components.css";
import menu from "./data/nav-menu.json";
import { changePage, updateURL } from './controller.js'

function createContainer() {
  const el = document.createElement('div');
  el.classList.add('container');
  return el;
}

const nav = (() => {
  let content = menu;
  const createBar = () => {
    const bar = document.createElement('div');
    bar.id = 'nav-bar';
    return bar;
  }

  const createLink = () => {
    // console.table(content);
    const navMenu = document.createElement('div');
    navMenu.id = 'nav-menu';
    navMenu.classList.add('flex', 'al-center', 'jc-center')
    content.forEach((obj) => {
      let menu = document.createElement('a');

      menu.innerText = obj.title;
      // menu.href = '#';
      menu.classList.add('nav-item', 'flex', 'jc-center', 'al-center');
      menu.addEventListener("click", () => {
        updateURL(obj.title);
        changePage(obj.title);
      });

      navMenu.appendChild(menu);
    })
    return navMenu;
  }

  const render = () => {
    const navbar = createBar();
    navbar.appendChild(createLink());
    return navbar;
  }
  return render;
})();

const heading = (() => {
  function title(text) {
    const el = document.createElement('h1');
    el.classList.add("title");
    el.innerHTML = text;
    return el;
  }

  function subtitle(text) {
    const el = document.createElement('h2');
    el.classList.add("subtitle");
    el.innerHTML = text;
    return el;
  }

  function description(text) {
    const el = document.createElement('p');
    el.classList.add("desc");
    el.innerHTML = text;
    return el;
  }
  return {
    title, subtitle, description
  }
})();

const card = (() => {

  function title(text) {
    const el = document.createElement('h1');
    el.classList.add("card-title");
    el.innerHTML = text;
    return el;
  }
  function price(text) {
    const el = document.createElement('h3');
    el.classList.add("card-price");
    el.innerHTML = text;
    return el;
  }
  function desc(text) {
    const el = typeof (text) == "object" ? document.createElement('div') : document.createElement('p');
    el.classList.add("card-desc");
    el.innerHTML = text;
    return el;
  }
  function image(url) {
    const div = document.createElement('div');
    div.classList.add("card-pic");

    const img = new Image();
    img.src = require('./asset/' + url);
    div.appendChild(img);

    return div
  }

  return (obj) => {
    const el = document.createElement('div');
    el.classList.add('card');

    const body = document.createElement('div');
    body.classList.add('card-body');

    if (obj) {
      if (obj.name) body.appendChild(title(obj.name));
      if (obj.price) body.appendChild(price(obj.price));
      if (obj.desc) body.appendChild(desc(obj.desc));
      if (obj.img) el.appendChild(image(obj.img));
    }
    el.appendChild(body);

    return { el, body };
  }
})();


export {
  heading,
  nav,
  createContainer,
  card,
}
