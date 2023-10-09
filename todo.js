const todoList = [];

const listNameEl = document.querySelector('.js-list-name');
const saveBtnEl = document.querySelector('.save-btn');
const listRemoveBtnEl = document.querySelector('.list-name-remove-btn');
const taskNameEl = document.querySelector('.js-task-input');
const qtyEl = document.querySelector('.js-task-qty');
const taskAddBtnEl = document.querySelector('.task-input-add-btn');

const taskEl = document.querySelector('.js-task');

function renderTodoList() {
  let todoListHTML = '';

  // FOR EACH

  todoList.forEach((todoObj) => {
    const name = todoObj.name;
    // Destructuring
    /* const { name, dueDate } = todoObj; */
    const html = `    
    <div class="task">
    <div class="task-name-wrapper"><span class="task-name">${name}</span></div>
    <a class="task-cross-btn">
    <i class='bx bx-x-circle'></i>
    </a>
    <a class="task-remove-btn">
    <i class="bx bx-trash"></i>
    </a>
    </div>
      `;
    todoListHTML += html;
  });

  taskEl.innerHTML = todoListHTML;
}

function addTodo() {
  const name = taskNameEl.value;
  todoList.push({
    name: name,
    // Shorthand
    /* name, 
    dueDate */
  });
  renderTodoList();
  taskNameEl.value = '';
  taskNameEl.focus();
  const taskAddedNameEl = document.querySelector('.task-name');
  const taskCrossBtnEl = document.querySelector('.task-cross-btn');
  const taskRemoveBtnEl = document.querySelector('.task-remove-btn');

  taskCrossBtnEl.addEventListener('click', () => {
    taskAddedNameEl.classList.toggle('task-name-cross');
    taskCrossBtnEl.innerHTML = "<i class='bx bx-revision'></i>";
  });
}

taskAddBtnEl.addEventListener('click', () => {
  addTodo();
});

// Loops

/*  let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}; */

/* let i = 1

do {
  console.log(i);
  i++;
} while (i <= 6) */

/* for (i = 1; i <= 7; i++) {
  console.log(i);
}; */

/* let randomNum = 0;

while (randomNum < 0.5) {
  randomNum = Math.random();
  console.log(randomNum);
} */
