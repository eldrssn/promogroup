import { hideElement } from "./hide-element";
import { openBurgerMenu } from "./open-burger-menu";

const greetings = document.querySelector('.greetings');
const nav = document.querySelector('.nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

if (greetings) {
  nav.classList.add('visually-hidden');
  main.classList.add('visually-hidden');
  footer.classList.add('visually-hidden');
  hideElement(greetings, nav, main, footer);
}

openBurgerMenu(nav, main);