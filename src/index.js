import { nav } from './components.js';
import { changePage } from './controller.js'

import css from './css/index.css';

"use strict";

const DOM = (() => {
  const body = document.getElementsByTagName('body')[0];
  const query = new URLSearchParams(window.location.search);
  const page = query.get('page')
  const init = () => {
    body.prepend(nav());

    if (page) changePage(page);
    else changePage("home");
  }
  return {
    init,
  }
})();

DOM.init();
