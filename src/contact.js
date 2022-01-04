import {
  createContainer,
  heading,
  card,
} from './components.js'

import './css/contact.css'
import '@iconify/iconify';

const page = require('./data/page.json').contact;

const header = (() => {
  const title = () => {
    const el = heading.title(page.title)
    el.id = 'contact-title';
    return el;
  };
  const subtitle = () => {
    const el = heading.subtitle(page.subtitle);
    el.id = 'contact-subtitle';
    return el;
  }

  return () => {
    const el = document.createElement('div');
    el.append(title(), subtitle());
    el.id = "contact-header";
    el.classList.add("header");
    return el;
  }
})();

const content = (() => {
  const social = () => {
    let item = {
      "phone": {
        "icon": "akar-icons:phone",
        "text": "+62 554-248-9874"
      },
      "email": {
        "icon": "ant-design:mail-outlined",
        "text": "restaurant@itshiroto.com"
      },
      "insta": {
        "icon": "akar-icons:instagram-fill",
        "text": "@lerestaurantdehiroto"
      }
    }

    const base = card();
    base.el.id = "contact-social";
    const cardBody = base.body;
    cardBody.id = "social-body";

    Object.values(item).forEach(element => {
      let div = document.createElement("div");
      let icon = document.createElement("span");
      let text = document.createElement("p");

      icon.classList.add("iconify");
      icon.dataset.icon = element.icon;
      text.textContent = element.text;

      div.append(icon, text);
      div.classList.add("social-item")
      cardBody.appendChild(div);
    });

    return base.el;
  }

  const map = () => {
    const base = card();
    base.el.id = "contact-map";
    const cardBody = base.body;
    cardBody.id = "map-body";

    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.986062150584!2d117.50610719999999!3d2.1590027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5096bf5b341%3A0xdd54ae1f51ee7897!2sJembatan%20Sambaliung!5e0!3m2!1sen!2sid!4v1641271538347!5m2!1sen!2sid";
    map.id = "map-iframe";
    map.loading = "lazy";

    cardBody.appendChild(map);
    return base.el;
  }

  return () => {
    const base = document.createElement('div');
    base.id = "contact-body";
    base.appendChild(social());
    base.appendChild(map());
    return base;
  }
})();



export default function() {
  const container = createContainer();
  container.appendChild(header());
  container.appendChild(content());
  return container;
}
