
console.log(' ');

console.log('127.js is workingin fine ..................');

console.log(' ');

console.log('find the which key is pressed on the webpage(document):  ', );

console.log(' ', );

const body = document.body;
body.addEventListener('keypress', e => console.log(e) );
console.log(' ', );
const btnOne = document.querySelector('.headline .btn-one');
btnOne.addEventListener('mouseover', e => e.target.style.backgroundColor = 'pink' );
btnOne.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white' );
console.log(' ', );
const btnTwo = document.querySelector('.headline .btn-two');
btnTwo.addEventListener('mouseover', e => e.target.style.backgroundColor = 'red' );
btnTwo.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white');
console.log(' ', );
const btnThree = document.querySelector('.headline .btn-three');
btnThree.addEventListener('mouseover', e => e.target.style.backgroundColor = 'yellow' );
btnThree.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white' );
console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

