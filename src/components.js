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
}
