import './style.css';

const taskSec = document.querySelector('.list-contaner');
const task = [
  {
    description: 'awesome book',
    completed: false,
    index: '0',
  },
  {
    description: 'list project to',
    completed: false,
    index: '1',
  },
];

for (let i = 0; i < task.length; i += 1) {
  const tasklist = document.createElement('li');
  tasklist.classList = 'itm';
  const todo = `
<input type="checkbox" class="checkbox" id="${task[i].index}">
        <p id="0" class="para-1">${task[i].description}</p>
        <button><i class="fa fa-ellipsis-v"></i></button>

`;
  tasklist.innerHTML += todo;
  taskSec.append(tasklist);
}