import home from './home.js';
import { nav } from './components.js';

import css from './css/index.css';

"use strict";

const DOM = (() => {
  const body = document.getElementsByTagName('body')[0];
  const content = document.querySelector('#content');
  const render = (item) => {
    item = item.toLowerCase();
    if (content.innerHTML) {
      content.innerHTML = "";
    }
    switch (item) {
      case 'home': content.appendChild(home()); break;
      default: console.warn("There's no page with that name"); break;
    }
  }
  const init = () => {
    body.prepend(nav());
    render("home");
  }
  return {
    init,
    render,
  }
})();

DOM.init();
