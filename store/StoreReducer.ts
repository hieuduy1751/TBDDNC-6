import * as constants from './constants';

export interface State {
  job: string,
  jobs: Job[]
}

export interface Job {
  id: number,
  title: string,
  status: boolean,
}

export const initialState: State = {
  job: '',
  jobs: []
}

export default function StoreReducer(state: State, action: any) {
  switch (action.type) {
    case constants.SET_JOBS:
      return {
        job: state.job,
        jobs: action.payload
      }
    case constants.SET_JOB:
      return {
        job: action.payload,
        jobs: state.jobs
      };
    case constants.ADD_JOB:
      return {
        job: state.job,
        jobs: [action.payload, ...state.jobs]
      };
    case constants.DELETE_JOB:
      return {
        job: state.job,
        jobs: state.jobs.filter(job => job.id !== action.payload)
      };
    case constants.UPDATE_JOB:
      return {
        job: state.job,
        jobs: state.jobs.map(job => job.id === action.payload.id ? action.payload : job)
      };
    default:
      return state;
  }
}