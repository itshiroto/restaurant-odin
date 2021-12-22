import { nav } from './components.js';
import { changePage } from './controller.js'

import css from './css/index.css';

"use strict";

const DOM = (() => {
  const body = document.getElementsByTagName('body')[0];
  const init = () => {
    body.prepend(nav());
    changePage("home");
  }
  return {
    init,
  }
})();

DOM.init();
