import { createContainer, heading as components } from './components.js'

import './css/home.css';
import page from './data/page.json';

const data = page.home;

export default (() => {
  const name = () => {
    const el = components.subtitle(data.subtitle);
    el.id = "home-subtitle";
    return el;
  }
  const heading = () => {
    const el = components.title(data.title);
    el.id = 'home-title';
    return el;
  };
  const desc = () => {
    const el = components.description(data.desc);
    el.id = 'home-description';
    return el;
  }

  // const hello = () => {
  //   const p = document.createElement('p');
  //   p.innerText = "Hello World! This is from home object";
  //   return p;
  // }

  const render = () => {
    const bg = document.createElement('section');
    bg.id = 'home';

    const el = createContainer();
    el.append(name(), heading(), desc());
    el.id = 'home-element';
    bg.appendChild(el);
    return bg;
  }

  return render;
})()
