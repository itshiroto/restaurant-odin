import {
  createContainer,
  heading,
} from './components.js'

import './css/menu.css'
import data from './data/page.json'
data = data.menu;

const header = (() => {
  const title = () => {
    const el = heading.title(data.title)
    el.id = 'menu-title';
    return el;
  };
  const subtitle = () => {
    const el = heading.subtitle(data.subtitle);
    el.id = 'menu-subtitle';
    return el;
  }

  const render = () => {
    const el = document.createElement('div');
    el.append(title(), subtitle());
    el.id = "menu-header";
    el.classList.add('flex', 'jc-center', 'al-center');
    return el;
  }

  return render;
})();

const card = (() => {
  // TODO
})

function init() {
  const container = createContainer();
  container.appendChild(header());
  return container;
}

export default init;
