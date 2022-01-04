import {
  createContainer,
  heading,
  card,
} from './components.js'

import './css/menu.css'
import page from './data/page.json'
page = page.menu;

import menu from './data/food-menu.json'

const header = (() => {
  const title = () => {
    const el = heading.title(page.title)
    el.id = 'menu-title';
    return el;
  };
  const subtitle = () => {
    const el = heading.subtitle(page.subtitle);
    el.id = 'menu-subtitle';
    return el;
  }

  return () => {
    const el = document.createElement('div');
    el.append(title(), subtitle());
    el.id = "menu-header";
    el.classList.add("header");
    return el;
  }
})();

function menuList() {
  const base = document.createElement('div');
  base.id = 'menu-list';
  menu.forEach(el => {
    base.appendChild(card(el).el);
  });
  return base;
}

export default function() {
  const container = createContainer();
  container.appendChild(header());
  container.appendChild(menuList());
  return container;
}

