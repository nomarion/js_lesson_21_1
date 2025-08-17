'use strict';

import { TaskController } from './controller/task-controller.js';
import { TaskItemComponent } from './component/task-item-component.js';
import { taskModal } from "./component/task-modal-component.js";
const taskController = new TaskController();
$('#taskButton').click(function () {
  $('.table tbody').append(taskController.save($('#taskInput').val()));
  $('#taskInput').val('');
});
$(document).ready(function () {
  // новые задачи
  $('.table tbody').append(TaskItemComponent(taskController.findAll()));
  // модалка
  $('.table tbody').on('click', '.task-link', function () {
    const taskId = $(this).data('id');
    const task = taskController.findById(taskId.trim());
    taskModal(task);
  });
  // удаление
  $('.table tbody').on('click', '.btn.btn-danger.delete', function () {
    const $tr = $(this).closest('tr');
    const $firstTd = $tr.find('td').first();
    const id = $firstTd.text().trim();
    taskController.remove(id);
    $tr.remove();
  });
  // статусы
  $('.table tbody').on('change', '.form-check-input', function () {
    const tr = $(this).closest('tr');
    const checked = $(this).is(':checked');
    taskController.update(tr.find('td').first().text().trim(), checked);
    if (checked) {
      tr.toggleClass('text-decoration-line-through text-muted', checked);
    } else {
      tr.removeClass('text-decoration-line-through text-muted');
    }
  });
});