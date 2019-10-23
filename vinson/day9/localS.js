const theme = window.localStorage.getItem('theme');
let stores = window.localStorage.getItem('stores') ?
JSON.parse(window.localStorage.getItem('stores')) : [];
if (theme) {
    document.body.style.backgroundColor = theme;
}
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', save);
function save () {
  console.log('save', input.value);
  window.localStorage.setItem('theme', input.value);
    window.localStorage.setItem('stores', JSON.stringify(stores));
}

console.log('theme', theme);
console.log('stores', stores);


