import navCSS from "./css/components.css";
import menu from "./data/menu.json";

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
      menu.href = obj.href;
      menu.classList.add('nav-item', 'flex', 'jc-center', 'al-center');

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

export {
  title,
  subtitle,
  description,
  nav,
}
