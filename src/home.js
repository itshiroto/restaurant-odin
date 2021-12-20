import * as components from './components.js'

import css from './css/home.css';

const home = (() => {
  const name = () => {
    const el = components.subtitle("Le Restaurant de Hiroto");
    el.id = "home-subtitle";
    return el;
  }
  const heading = () => {
    const el = components.title("Finest food <br>on the city");
    el.id = 'home-title';
    return el;
  };
  const desc = () => {
    const el = components.description("One of the best restaurant with beautiful looking view and delicious food. You will be mesmerized by the taste and the place of this beautiful restaurant.");
    el.id = 'home-description';
    return el;
  }

  const hello = () => {
    const p = document.createElement('p');
    p.innerText = "Hello World! This is from home object";
    return p;
  }

  return {
    name,
    heading,
    desc,
  }
})()

function render() {
  const main = document.createElement('div');
  main.setAttribute('id', 'home');
  main.appendChild(home.name());
  main.appendChild(home.heading());
  main.appendChild(home.desc());
  return main;
}

export default render;
