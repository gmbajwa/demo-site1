
console.log(' ');

console.log('116.js is workingin fine ..................');

console.log(' ');

const target = document.querySelector('.todo-list');

const li = document.createElement('li');

li.textContent = 'task 2';

console.log('to add before and after the same Element Node, first make clone: ', );

const li2 = li.cloneNode(true);

target.prepend(li);

target.append(li2);

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

