import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function changePage(page) {
  const content = document.querySelector('#content');
  page = page.toLowerCase();
  if (content.innerHTML) {
    content.innerHTML = "";
  }
  switch (page) {
    case 'home': content.appendChild(home()); break;
    case 'menu': content.appendChild(menu()); break;
    case 'contact': content.appendChild(contact()); break;
    default: console.warn("There's no page with that name"); break;
  }
}

function updateURL(page) {
  page = page.toLowerCase();
  window.history.pushState('', '', `?page=${page}`);
}

export {
  changePage,
  updateURL,
}
