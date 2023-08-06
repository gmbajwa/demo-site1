
console.log(' ');

console.log('129.js is workingin fine ..................');

console.log(' ');

console.log('Handling todo-form submit Event: ', );

console.log(' ', );

const todoForm = document.querySelector('.form-todo');
const taskInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');

console.log(' ', );

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const newTaskText = taskInput.value;
  const nextTask = document.createElement('li');
  nextTask.innerHTML = `
    <span class='todo-text'>${newTaskText}</span>
    <div class='todo-buttons'>
      <button class='done todo-button'>Done</button>
      <button class='remove todo-button'>Remove</button>
    </div>`;
  
  todoList.append(nextTask);
  taskInput.value = '';
});

console.log(' ', );

todoList.addEventListener('click', e => {
  if(e.target.classList.contains('done')){
    const taskListItemText = e.target.parentNode.previousElementSibling;
    taskListItemText.style.textDecoration = 'line-through';
  }

  if(e.target.classList.contains('remove')){
    e.target.parentNode.parentNode.remove();
  }

});

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

console.log(' ', );

