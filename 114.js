
console.log(' ');

console.log('114.js is workingin fine ..................');

console.log(' ');

console.log('document.createElement(): ', );

console.log(' ', );

const todoListItem = document.createElement('li');

console.log('todoListItem: ', todoListItem);

console.log(' ', );

console.log('Creating Text Node For todoListItem: ', );

console.log(' ', );

const todoListItemTextNode = document.createTextNode('task 2');

console.log('todoListItemTextNode: ', todoListItemTextNode);

console.log(' ', );

todoListItem.appendChild(todoListItemTextNode)

console.log('todoListItem: ', todoListItem);

console.log(' ', );

console.log('adding new created li item to ul using apend Method: ', );

console.log(' ', );

const todoList = document.querySelector('.todo-list');

console.log('todoList:', todoList);

console.log(' ', );

console.log('adding next li using append(); ', );

console.log(' ', );

todoList.append(todoListItem);

console.log(' ', );

console.log('new todoList: ', todoList );

console.log(' ', );

console.log('creating task 3 ', );

const task3 = document.createElement('li');

task3.textContent = 'Task 3';

console.log('task 3:', task3);

todoList.append(task3);

console.log(' ');

const li = document.querySelector('.todo-list li');

console.log('li', li);

console.log('removed:', li.remove());

const beforeLi = document.createElement('li');
beforeLi.textContent = 'before the ul';
todoList.before(beforeLi);

console.log(' ');

console.log('inserting li after the ul:');

const afterLi = document.createElement('li');

afterLi.textContent = 'after the ul';

todoList.after(afterLi);





