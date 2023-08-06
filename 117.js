
console.log(' ');

console.log('117.js is workingin fine ..................');

console.log(' ');

const target = document.querySelector('.todo-list');

const li = document.createElement('li');

li.textContent = 'task 2';

target.appendChild(li);

console.log(' ', );

const task3 = document.createElement('li');
task3.textContent = 'task 3';
const referenceNode = document.querySelector('.first-li');
target.insertBefore(task3, referenceNode);

console.log(' ', );

const task4 = document.createElement('li');
task4.textContent = 'task 4';
target.replaceChild(task4, referenceNode);

console.log('removeChild(): ', );

target.removeChild(li);
console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

