import { Job } from "./StoreReducer"

const apiPath = 'https://633fa892e44b83bc73bea325.mockapi.io/api/v1'

const getTasks = async (): Promise<Job[]> => {
  const res = await fetch(`${apiPath}/tasks`)
  return await res.json()
}

const createTask = async (task: Job) => {
  const res = await fetch(`${apiPath}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  return await res.json()
}

const updateTask = async (task: Job) => {
  const res = await fetch(`${apiPath}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  return await res.json()
}

const deleteTask = async (taskId: number) => {
  const res = await fetch(`${apiPath}/tasks/${taskId}`, {
    method: 'DELETE'
  })
  return await res.json()
}

export { getTasks, createTask, updateTask, deleteTask }

