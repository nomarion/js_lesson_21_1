'use strict';

import { TaskRepository } from '../repository/task-repository.js';
export class TaskService {
  #taskRepository = new TaskRepository();
  save(task) {
    const taskObj = {
      "id": crypto.randomUUID(),
      "task": task,
      "status": false,
      "createdAt": Date.now()
    };
    return this.#taskRepository.save(taskObj);
  }
  findAll() {
    return this.#taskRepository.findAll();
  }
  remove(id) {
    return this.#taskRepository.remove(id);
  }
  update(id, status) {
    return this.#taskRepository.update(id, status);
  }
  findById(id) {
    return this.#taskRepository.findById(id);
  }
}