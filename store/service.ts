import { Job } from "./StoreReducer"

const getTasks = () => {
  return fetch('/api/tasks')
    .then(res => res.json())
}

const createTask = (task: Job) => {
  return fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(res => res.json())
}

const updateTask = (task: Job) => {
  return fetch(`/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
    .then(res => res.json())
}

const deleteTask = (taskId: number) => {
  return fetch(`/api/tasks/${taskId}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
}

export { getTasks, createTask, updateTask, deleteTask }

