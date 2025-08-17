'use strict';

import { TaskService } from "../service/task-service.js";
export class TaskController {
  #taskService = new TaskService();
  save(taskName) {
    if (taskName?.trim() !== '') {
      return this.#taskService.save(taskName.trim());
    }
    return null;
  }
  findAll() {
    return this.#taskService.findAll();
  }
  remove(id) {
    return this.#taskService.remove(id);
  }
  update(id, status) {
    return this.#taskService.update(id, status);
  }
  findById(id) {
    return this.#taskService.findById(id);
  }
}