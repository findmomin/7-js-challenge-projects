'use strict';

// DOM Elements
const elements = {
  modalElements: document.querySelectorAll('.modal, .overlay'),
  btnsOpenModal: document.querySelectorAll('.btn--show-modal'),
  btnsCloseModal: document.querySelectorAll('.btn--close-modal, .overlay'),
  btnsSmoothScr: [
    ...document.querySelectorAll(
      '.btn--scroll-to, .nav__links :not(:last-child)'
    ),
  ],
  navLinks: document.querySelectorAll('.nav__link'),

  tabsContainer: document.querySelector('.operations__tab-container'),

  sections: [...document.querySelectorAll('.section')],
};

//////////////////////// Functions ///////////////////////////////
// Opens modal window
const openModal = e => {
  e.preventDefault();
  elements.modalElements.forEach(el => el.classList.remove('hidden'));
};

// Closes modal window
const closeModal = e => {
  if (!e.key || e.key === 'Escape')
    elements.modalElements.forEach(el => el.classList.add('hidden'));
};

// Smooth scroll
const smoothScroll = e => {
  e.preventDefault();
  elements.sections[Number(e.target.dataset.scrollTo) - 1].scrollIntoView({
    behavior: 'smooth',
  });
};

// Hide other nav links on hover
const navHoverEffect = (e, mouseLeave) => {
  if (mouseLeave) {
    elements.navLinks.forEach(link => link.classList.remove('hide-nav-link'));
    return;
  }

  elements.navLinks.forEach(link => link.classList.add('hide-nav-link'));
  e.target.classList.remove('hide-nav-link');
};

// Modal window opening & closing handlers
elements.btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
elements.btnsCloseModal.forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', closeModal);

// Smooth scroll handlers
elements.btnsSmoothScr.forEach(btn =>
  btn.addEventListener('click', smoothScroll)
);

// Operation tabs switcher
const switchTab = e => {
  if (e.target === elements.tabsContainer) return;

  console.log(e.target);
};

//////////////////////// Event Listeners /////////////////////////
// Navigation links on hover handlers
elements.navLinks.forEach(link =>
  link.addEventListener('mouseenter', navHoverEffect)
);
elements.navLinks.forEach(link =>
  link.addEventListener('mouseleave', navHoverEffect.bind(null, true))
);

// Operations tab switch handlers
elements.tabsContainer.addEventListener('click', switchTab);
