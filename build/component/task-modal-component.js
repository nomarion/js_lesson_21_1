'use strict';

export function taskModal(task) {
  $('.modal').remove();
  const $modal = `
    <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">${task.id}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <p>${task.task}</p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
    </div>
    `;
  $('body').append($modal);
  const modalElement = document.querySelector('.modal');
  const bootstrapModal = new bootstrap.Modal(modalElement);
  bootstrapModal.show();
}