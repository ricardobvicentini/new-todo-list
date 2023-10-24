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
  crossIcon.innerHTML = '<i class="bx bx-check-circle"></i>';
  taskCrossBtn.appendChild(crossIcon);

  const undoIcon = document.createElement('div');
  undoIcon.classList.add('undo-icon');
  undoIcon.innerHTML = '<i class="bx bx-revision"></i></div>';
  taskCrossBtn.appendChild(undoIcon);

  const taskRemoveBtn = document.createElement('a');
  taskRemoveBtn.classList.add('task-remove-btn');
  taskRemoveBtn.innerHTML = '<i class="bx bx-trash"></i>';
  task.appendChild(taskRemoveBtn);

  taskContainer.appendChild(taskWrapper);
};

// Show remove modal
// Exibir modal de remoção
const removeModal = () => {
  overlay.classList.toggle('hidden');
  taskRemoveModal.classList.toggle('hidden');
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
  console.log(targetEl, parentEl);
  if (targetEl.classList.contains('task-cross-btn')) {
    parentFirstChild
      .querySelector('.task-name')
      .classList.toggle('task-name-cross');
    targetEl.querySelector('.cross-icon').classList.toggle('hidden');
    targetEl.querySelector('.undo-icon').classList.toggle('show');
  }
  if (targetEl.classList.contains('task-remove-btn')) {
    removeModal();
  }
  if (targetEl.classList.contains('no-btn')) {
    removeModal();
  }
  if (targetEl.classList.contains('yes-btn')) {
    removeModal();
    parentEl.querySelector('.task').remove();
  }
});
