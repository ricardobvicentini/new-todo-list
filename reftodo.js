'use strict';

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
