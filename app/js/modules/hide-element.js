const TIMEOUT_COUNT = 300;

const hideElement = (elemHide, ...elemShow) => {

  const showElement = () => {
    setTimeout(() => {
      elemShow.forEach(elem => {
        elem.classList.remove('visually-hidden');
      })
    }, TIMEOUT_COUNT);
  }

  const onElementClick = () => {
    elemHide.classList.add('hide');
    setTimeout(() => { elemHide.style.display = "none"; }, TIMEOUT_COUNT);
    document.removeEventListener('keydown', onDocumentKeydown);
    elemHide.removeEventListener('click', onElementClick);
    showElement(elemShow);
  }
  
  const onDocumentKeydown = () => {
    elemHide.classList.add('hide');
    setTimeout(() => { elemHide.style.display = "none"; }, TIMEOUT_COUNT);
    document.removeEventListener('keydown', onDocumentKeydown);
    elemHide.removeEventListener('click', onElementClick);
    showElement(elemShow);
  }
  
  elemHide.addEventListener('click', onElementClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

export { hideElement };