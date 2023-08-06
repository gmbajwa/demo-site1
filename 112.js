
console.log(' ');

console.log('112.js is workingin fine ..................');

console.log(' ');

const sectionTodo = document.querySelector('.section-todo');

console.log('sectionTodo: ', sectionTodo );

console.log(' ', );

console.log('sectionTodo all classes: ', sectionTodo.classList );

console.log(' ', );

console.log('typeof of DOMTokenList: ', typeof sectionTodo.classList );

console.log(' ', );

console.log('is DOMTokenList is an Array Object: ', Array.isArray(sectionTodo.classList) );

console.log(' ', );

console.log('can we use for of loop to check wether DOMTokenList is Array Like Object or Iterator: ', );

console.log(' ', );

for ( let s of sectionTodo.classList ) {
  console.log(s);
}

console.log(' ', );

console.log('length of DOMTokenList: ', sectionTodo.length );

console.log(' ', );

console.log('indexing of DOMTokenList: ', sectionTodo[1]);

console.log(' ', );

console.log('adding new class through JS: ', );

sectionTodo.classList.add('bg-dark');

console.log(' ', );

console.log('Removing Existing Class From DOMTokenList: ', );

console.log(' ', );

console.log(' ', );

console.log('remove container class ', sectionTodo.classList.remove('container') );

console.log(' ', );

console.log('Does a class xyz exist in sectionTodo: ', sectionTodo.classList.contains('xyz') );

console.log(' ', );

console.log('classList.toggle(\'bg-dark\'): ', sectionTodo.classList.toggle('bg-dark') );

console.log(' ', );

const header = document.querySelector('header');

console.log('header:', header);

console.log(' ', );

console.log('Check wich classes does header have: ',header.classList );

console.log(' ', );

console.log('add bg-dark class to header: ', header.classList.add('bg-dark') );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );



