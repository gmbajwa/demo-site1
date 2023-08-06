
console.log(' ');

console.log('bubbling.js is workingin fine ..................');

console.log(' ');

const body = document.body;

console.log(body);

body.addEventListener('click',  () => {
}, true);

const sectionP = document.querySelector('section p');
const section = document.querySelector('section');
const main = document.querySelector('main');
sectionP.addEventListener('click', e => console.log('main section p'));
section.addEventListener('click', e => console.log('main section'));
main.addEventListener('click', e => console.log('main'));
