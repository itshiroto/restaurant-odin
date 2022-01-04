import { nav } from './components.js';
import { changePage } from './controller.js'

import './css/index.css';

"use strict";

const init = (() => {
  const body = document.getElementsByTagName('body')[0];
  const query = new URLSearchParams(window.location.search);
  const page = query.get('page')
  return () => {
    body.prepend(nav());

    if (page) changePage(page);
    else changePage("home");
  }
})();

init();
