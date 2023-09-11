import {ScrollLock} from "../../utils/scroll-lock.js";
import {FocusLock} from "../../utils/focus-lock.js";

const menu = document.querySelector('.main-nav');
const burger = menu?.querySelector('.burger');

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const breakpoint = window.matchMedia(`(min-width:768px)`);
const breakpointChecker = () => {
  if (breakpoint.matches) {
    menu.classList.remove('main-nav--menu-open')
    focusLock.unlock();
    window.scrollLock.enableScrolling();
  }
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();


export const menuInit = () => {
  if (!burger) {
    return;
  }

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('main-nav--menu-open')

    focusLock.lock('.main-nav');
    window.scrollLock.disableScrolling();
    if(isOpen) {
      focusLock.unlock();
      window.scrollLock.enableScrolling();
    }

    menu.classList.toggle('main-nav--menu-open');
  });
};
