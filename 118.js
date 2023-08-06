
console.log(' ');

console.log('118.js is workingin fine ..................');

const listByQuery = document.querySelectorAll('.todo-list li');

console.log(listByQuery)

console.log(' ');

const todoList = document.querySelector('.todo-list');

const listByGet = todoList.getElementsByTagName('li');

console.log(listByGet);

console.log(' adding new li ');

const task6 = document.createElement('li');

task6.textContent = 'Task 6';

console.log(' ');

console.log(task6);

todoList.append(task6);

const task7 = document.createElement('li');

task7.textContent = 'task 7';

todoList.append(task7);

