import './style.scss';
import TaskList from './modules/taskList.js';

const { body } = document;
// Container Section
const conSec = document.createElement('section');
conSec.classList.add('section');

// Top Section
const topSec = document.createElement('div');
topSec.classList.add('topSec');
const title = document.createElement('h1');
title.textContent = 'Today\'s To Do';
const reloadBtn = document.createElement('button');
reloadBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>';

// Window Reload
reloadBtn.addEventListener('click', () => {
  const taskList = new TaskList();
  taskList.clearAll();
});

// Bottom Section
const botSec = document.createElement('div');
botSec.classList.add('botSec');
const title2 = document.createElement('h2');
title2.textContent = 'Clear all completed';

// Clear All Event
title2.addEventListener('click', () => {
  const taskList = new TaskList();
  taskList.clearAllCompleted();
});

// Input Section
const inputSec = document.createElement('div');
inputSec.classList.add('inputSec');
const input = document.createElement('input');
input.placeholder = 'Add to your list...';
const addBtn = document.createElement('button');
addBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>';

// List Container
const listContainer = document.createElement('ul');
listContainer.classList.add('listContainer');

// Append Elements
topSec.append(title, reloadBtn);
inputSec.append(input, addBtn);
botSec.append(title2);
conSec.append(topSec, inputSec, listContainer, botSec);
body.append(conSec);

let index = 0;
const completed = false;
const taskList = new TaskList();
// Add Button Event
addBtn.addEventListener('click', () => {
  if (!input.value.trim()) {
    addBtn.setCustomValidity('Please fill in the task to add in the list.');
    addBtn.reportValidity();
  } else {
    taskList.add(input.value, completed, index);
    taskList.display();
    input.value = '';
    index += 1;
  }
});

// Keyboard Support
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// On Page Load
window.onload = () => {
  taskList.display();
};