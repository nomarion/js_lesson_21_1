'use strict';

import { TaskItemComponent } from '../component/task-item-component.js';
export class TaskRepository {
  #tasksItem = [];
  constructor() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    this.#tasksItem = tasks ?? [];
  }
  save(task) {
    this.#tasksItem.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.#tasksItem));
    return TaskItemComponent([task]);
  }
  findAll() {
    return this.#tasksItem;
  }
  remove(id) {
    const index = this.#tasksItem.findIndex(item => item.id === id);
    if (index !== -1) {
      this.#tasksItem.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.#tasksItem));
    }
  }
  update(id, status) {
    const indexItem = this.#tasksItem.findIndex(item => item.id === id);
    if (indexItem !== -1) {
      this.#tasksItem[indexItem].status = status;
      localStorage.setItem('tasks', JSON.stringify(this.#tasksItem));
    }
  }
  findById(id) {
    return this.#tasksItem.find(item => item.id === id);
  }
}