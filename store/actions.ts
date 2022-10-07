import { DELETE_JOB, ADD_JOB, SET_JOB, UPDATE_JOB, SET_JOBS } from "./constants";
import { Job } from "./StoreReducer";

const setJob = (job: string) => {
  return {
    type: SET_JOB,
    payload: job,
  };
}

const setJobs = (jobs: Job[]) => {
  return {
    type: SET_JOBS,
    payload: jobs,
  };
}

const addJob = (job: Job) => {
  return {
    type: ADD_JOB,
    payload: job
  }
}

const deleteJob = (jobId: number) => {
  return {
    type: DELETE_JOB,
    payload: jobId
  }
}

const updateJob = (job: Job) => {
  return {
    type: UPDATE_JOB,
    payload: job
  }
}

export { setJob, addJob, deleteJob, updateJob, setJobs };