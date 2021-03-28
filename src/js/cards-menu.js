import data from '../data/menu.json';
import template from '../template/template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.body,
  list: document.querySelector('.js-menu'),
  input: document.getElementById('theme-switch-toggle'),
};

refs.body.classList.add(
  localStorage.getItem('Theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('Theme'),
);

refs.input.checked = localStorage.getItem('Theme') === Theme.DARK;

const markup = template(data);

refs.list.insertAdjacentHTML('beforeend', markup);

function chenchTheme(add, remove) {
  refs.body.classList.replace(remove, add);
  localStorage.setItem('Theme', add);
}

refs.input.addEventListener('change', changeThemeOn);

function changeThemeOn({ target }) {
  if (target.checked) {
    chenchTheme(Theme.DARK, Theme.LIGHT);
  } else {
    chenchTheme(Theme.LIGHT, Theme.DARK);
  }
}
