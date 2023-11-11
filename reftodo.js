'use strict';

//* Elements
//* Elementos

//* List name
//* Nome da lista
const listName = document.querySelector('.list-name');
const saveBtn = document.querySelector('.save-btn');
const listRemoveBtn = document.querySelector('.list-name-remove-btn');
//* Task name
//* Nome da tarefa
const taskName = document.querySelector('.task-input');
const taskResetBtn = document.querySelector('.task-input-reset-btn');
const taskAddBtn = document.querySelector('.task-input-add-btn');
//* Tasks
//* Tarefas
const taskContainer = document.querySelector('.task-container');
const taskWrapper = document.querySelector('.task-wrapper');
//* Modals
//* Modais
const overlay = document.querySelector('.overlay');
const taskRemoveModal = document.querySelector('.task-remove-modal');
const removeTaskYesBtn = document.querySelector('.remove-confirm.yes-btn');
const removeTaskNoBtn = document.querySelector('.remove-confirm.no-btn');
const taskWrapperModal = document.querySelector('.task-wrapper-modal');
const listRemoveModal = document.querySelector('.list-remove-modal');

//* Functions
//* Funções

// Save task function
// Função salvar tarefa

const saveTask = function (taskInput) {
  const task = document.createElement('div');
  task.classList.add('task');
  taskWrapper.appendChild(task);

  const taskNameWrapper = document.createElement('div');
  taskNameWrapper.classList.add('task-name-wrapper');
  task.appendChild(taskNameWrapper);

  const taskName = document.createElement('span');
  taskName.classList.add('task-name');
  taskName.innerText = taskInput;
  taskNameWrapper.appendChild(taskName);

  const taskCrossBtn = document.createElement('a');
  taskCrossBtn.classList.add('task-cross-btn');
  task.appendChild(taskCrossBtn);

  const crossIcon = document.createElement('div');
  crossIcon.classList.add('cross-icon');
  crossIcon.innerHTML = '<i class="bx bx-check-circle" tabindex="0"></i>';
  taskCrossBtn.appendChild(crossIcon);

  const undoIcon = document.createElement('div');
  undoIcon.classList.add('undo-icon');
  undoIcon.innerHTML = '<i class="bx bx-revision" tabindex="0"></i></div>';
  taskCrossBtn.appendChild(undoIcon);

  const taskRemoveBtn = document.createElement('a');
  taskRemoveBtn.classList.add('task-remove-btn');
  taskRemoveBtn.innerHTML = '<i class="bx bx-trash" tabindex="0"></i>';
  task.appendChild(taskRemoveBtn);

  taskContainer.appendChild(taskWrapper);
  // Create a deep copy of the task
  // Criar cópia profunda de task
  /* const taskClone = task.cloneNode(true); */

  /*  const taskClone = task.cloneNode(true);
  taskWrapperModal.appendChild(taskClone); */
};

// Show/Hide overlay/modals
// Exibir/Esconder overlay/modais
const toggleModal = (modal) => {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
};

//* Events Handlers
//* Eventos
// Add task
// Adicionar tarefa
taskAddBtn.addEventListener('click', () => {
  const taskInputValue = taskName.value;
  if (taskInputValue) {
    saveTask(taskInputValue);
    taskName.placeholder = 'Task';
  } else {
    taskName.placeholder = 'Enter task';
  }
  taskName.value = '';
  taskName.focus();
});

// Reset task
// Reiniciar tarefa
taskResetBtn.addEventListener('click', () => {
  taskName.value = '';
  taskName.focus();
});

// Remove task
// Remover tarefa

// Assign click for the whole document, then identify the event target
// Atribuir click para o documento todo e identificar o alvo do evento
document.addEventListener('click', (event) => {
  // Create variable for event target and parents and siblings
  // Criar variável para o alvo do evento e pais e irmãos
  const targetEl = event.target;
  const parentEl = targetEl.closest('div');
  const parentFirstChild = targetEl.previousSibling;
  if (targetEl.classList.contains('task-cross-btn')) {
    parentFirstChild
      .querySelector('.task-name')
      .classList.toggle('task-name-cross');
    targetEl.querySelector('.cross-icon').classList.toggle('hidden');
    targetEl.querySelector('.undo-icon').classList.toggle('show');
  }
  if (targetEl.classList.contains('task-remove-btn')) {
    parentEl.classList.add('chosen');
    toggleModal(taskRemoveModal);
  }
  if (targetEl.classList.contains('no-btn')) {
    document.querySelector('.chosen').classList.remove('chosen');
    toggleModal(taskRemoveModal);
  }
  if (targetEl.classList.contains('yes-btn')) {
    document.querySelector('.chosen').remove();
    toggleModal(taskRemoveModal);
  }
});

// Add Modal Task List
// Adicionar Modal de Lista de Tarefas

let originalListContent = '';
let taskContent = '';

// Function
// Função

const addTaskList = function () {
  toggleModal(taskWrapperModal);

  taskContent = taskWrapper.cloneNode(true);
  taskWrapperModal.appendChild(taskContent);

  const modalBtns = taskWrapperModal.querySelectorAll('a');
  modalBtns.forEach((btn) => btn.remove());
  taskWrapperModal.insertAdjacentHTML(
    'afterbegin',
    `<h3>${listName.value}</h3>`
  );

  originalListContent = taskWrapperModal.innerHTML;
  taskWrapperModal.insertAdjacentHTML(
    'beforeend',
    `<div class="btn-twmodal"><button class="save-list-btn">Save</button><button class="edit-list-btn">Edit</button></div>`
  );

  const saveListBtn = taskWrapperModal.querySelector('.save-list-btn');
  const editListBtn = taskWrapperModal.querySelector('.edit-list-btn');

  // Event
  // Evento

  editListBtn.addEventListener('click', () => {
    toggleModal(taskWrapperModal);
    taskWrapperModal.querySelector('h3').remove();
    taskContent = '';
    taskWrapperModal.innerHTML = '';
  });

  saveListBtn.addEventListener('click', () => {
    toggleModal(taskWrapperModal);
    taskWrapperModal.querySelector('h3').remove();
    taskContent = '';
    taskWrapperModal.innerHTML = '';
    listName.value = '';
    taskWrapper.querySelectorAll('.task').forEach((el) => el.remove());
  });
};

saveBtn.addEventListener('click', () => {
  if (listName.value && taskWrapper.firstElementChild !== null) {
    addTaskList();

    listName.placeholder = 'List name';
    taskName.placeholder = 'Task';
  } else {
    listName.placeholder = 'Enter list name';
    taskName.placeholder = 'Enter task';
  }
});

const yesListBtn = listRemoveModal.querySelector('.yes-list-btn');
const noListBtn = listRemoveModal.querySelector('.no-list-btn');

noListBtn.addEventListener('click', () => toggleModal(listRemoveModal));
yesListBtn.addEventListener('click', () => {
  toggleModal(listRemoveModal);
  taskWrapperModal.querySelector('h3').remove();
  taskContent = '';
  taskWrapperModal.innerHTML = '';
  listName.value = '';
  taskWrapper.querySelectorAll('.task').forEach((el) => el.remove());
});

listRemoveBtn.addEventListener('click', () => {
  if (listName.value && taskWrapper.firstElementChild !== null) {
    toggleModal(listRemoveModal);

    listName.placeholder = 'List name';
    taskName.placeholder = 'Task';
  } else {
    listName.placeholder = 'Enter list name';
    taskName.placeholder = 'Enter task';
  }
});
