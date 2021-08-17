import { hideElement } from "./hide-element";

const openBurgerMenu = (selector, ...others) => {
  const button = selector.querySelector('.burger_menu__button');

  const toggleBurgerMenu = () => {
    selector.classList.toggle('nav--open_burger');
    others.forEach(node => {
      node.classList.toggle('visually-hidden');
    }) 
  }

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleBurgerMenu();
  })
}

export { openBurgerMenu };