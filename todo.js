const todoList = [];

const listNameEl = document.querySelector('.js-list-name');
const saveBtnEl = document.querySelector('.save-btn');
const listRemoveBtnEl = document.querySelector('.list-name-remove-btn');
const taskNameEl = document.querySelector('.js-task-input');
const qtyEl = document.querySelector('.js-task-qty');
const taskAddBtnEl = document.querySelector('.task-input-add-btn');
const taskEl = document.querySelector('.js-task');
const listRemoveModalEl = document.querySelector('.list-remove-modal');
let overlayEl;
let taskRemoveModalEl;
let taskRemoveBtnEls;

function renderTodoList() {
  let todoListHTML = '';

  //* FOR EACH

  todoList.forEach((todoObj, index) => {
    const name = todoObj.name;
    const html = `    
    <div class="task">
    <div class="task-name-wrapper"><span class="task-name">${name.toLowerCase()}</span></div>
    <a class="task-cross-btn">
    <div class="cross-icon"><i class='bx bx-x-circle'></i></div>
    <div class="undo-icon"><i class='bx bx-revision'></i></div>
    </a>
    <a class="task-remove-btn" onclick="
    todoList.splice(${index}, 1);
        renderTodoList()">
    <i class="bx bx-trash"></i>
    </a>
    </div>
      `;
    todoListHTML += html;
  });

  taskEl.innerHTML = todoListHTML;
}

//* ADD TO LIST FUNCTION / FUNÇÃO PARA ADICIONAR TAREFA
function addTodo() {
  if (taskNameEl.value === '') {
    taskNameEl.placeholder = 'Enter task';
  } else {
    taskNameEl.placeholder = 'Task';
    const name = taskNameEl.value;
    todoList.push({
      name: name,
    });
    renderTodoList();
    taskNameEl.value = '';
    taskNameEl.focus();
  }

  //* ADD EVENTLISTENER TO EACH NEW ELEMENT / ADICIONAR EVENTLISTENER PARA CADA NOVO ELEMENTO CRIADO
  // Elements / Elementos

  const taskCrossBtnEls = document.querySelectorAll('.task-cross-btn');
  taskCrossBtnEls.forEach((taskCrossBtnEl, index) => {
    const taskAddedNameEl =
      taskCrossBtnEl.parentElement.querySelector('.task-name');
    const taskCrossIcon = taskCrossBtnEl.querySelector('.cross-icon');
    const taskUndoIcon = taskCrossBtnEl.querySelector('.undo-icon');

    // Functions / Funções
    taskCrossBtnEl.addEventListener('click', () => {
      taskAddedNameEl.classList.toggle('task-name-cross');
      taskCrossIcon.classList.toggle('hidden');
      taskUndoIcon.classList.toggle('show');
    });
  });

  //* REMOVE TASK MODAL / MODAL PARA REMOÇÃO DE TAREFA
  // Elements / Elementos
  taskRemoveBtnEls = document.querySelectorAll('.task-remove-btn');
  overlayEl = document.querySelector('.overlay');
  taskRemoveModalEl = document.querySelector('.task-remove-modal');

  // Functions / Funções
  taskRemoveBtnEls.forEach((taskRemoveBtnEl) => {
    taskRemoveBtnEl.addEventListener('click', () => {
      overlayEl.classList.remove('hidden');
      taskRemoveModalEl.classList.remove('hidden');
    });
  });

  const noRemoveBtnEl = document.querySelector('.no-btn');
  const yesRemoveBtnEl = document.querySelector('.yes-btn');

  noRemoveBtnEl.addEventListener('click', () => {
    overlayEl.classList.add('hidden');
    taskRemoveModalEl.classList.add('hidden');
  });

  yesRemoveBtnEl.addEventListener('click', () => {
    overlayEl.classList.add('hidden');
    taskRemoveModalEl.classList.add('hidden');
  });
}

// EVENT HANDLER
taskAddBtnEl.addEventListener('click', () => {
  addTodo();
});
