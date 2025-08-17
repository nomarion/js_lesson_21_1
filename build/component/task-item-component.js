export function TaskItemComponent(tasksItem) {
  let rows = '';
  tasksItem.forEach((task, index) => {
    rows += `
        <tr ${task.status ? 'class="text-decoration-line-through text-muted"' : ''}>
            <td>${task.id}</th>
            <td><a class="task-link" data-id="${task.id}">${task.task}</a></td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" ${task.status ? 'checked' : ''}>
                </div>
            </td>
            <td>${new Date(task.createdAt).toLocaleString('ru-RU')}</td>
            <td>
            <button type="button" class="btn btn-danger delete">Delete</button>
            </td>
        </tr>
    `;
  });
  return rows;
}