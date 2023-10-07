const todoList = [];

const listNameEl = document.querySelector('.js-list-name');
const saveBtnEl = document.querySelector('.save-btn');
const listRemoveBtnEl = document.querySelector('.list-name-remove-btn');
const taskNameEl = document.querySelector('.js-task-input');
const qtyEl = document.querySelector('.js-task-qty');
const taskAddBtnEl = document.querySelector('.task-input-add-btn');

const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('js-name-input');
const taskEl = document.querySelector('.js-task');

function renderTodoList() {
  let todoListHTML = '';

  // FOR EACH

  todoList.forEach((todoObj, index) => {
    const name = todoObj.name;
    // Destructuring
    /* const { name, dueDate } = todoObj; */
    const html = `
    <div class="task">
      <div class="task-name-date"><span class="task-name">${name}</span> <span class="task-date">${dueDate}</span></div> 
      <button class="task-btn" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">X</button>
    </div>
      `;
    todoListHTML += html;
  });

  taskEl.innerHTML = todoListHTML;
}

/*   for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;
    const html = `
    <div class="task">
      <div class="task-name-date"><span class="task-name">${name}</span> <span class="task-date">${dueDate}</span></div> 
      <button class="task-btn" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">X</button>
    </div>
      `;
    todoListHTML += html;
  } 
  taskEl.innerHTML = todoListHTML;
}; */

function addTodo() {
  const name = inputEl.value;
  const dueDate = dateEl.value;
  todoList.push({
    name: name,
    dueDate: dueDate,
    // Shorthand
    /* name, 
    dueDate */
  });
  renderTodoList();
  inputEl.value = '';
  dateEl.value = '';
  inputEl.focus();
}

btnEl.addEventListener('click', () => {
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
