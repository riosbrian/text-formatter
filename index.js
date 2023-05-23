'use strict';

const textarea = document.querySelector('.textarea');

const OPTION = {
  lowercase: (text) => (textarea.value = text.toLowerCase()),
  uppercase: (text) => (textarea.value = text.toUpperCase()),
  capitalize: (text) => {
    const cap = text
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(' ');
    textarea.value = cap;
  },
};

const formatter = function ({ check, text }) {
  OPTION[check](text);
};

const form = document.querySelector('.formatterForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  formatter(data);
});
