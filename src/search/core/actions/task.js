import { TASK } from '../constants';

export const addTask = arr => ({
  type: TASK.ADD, arr,
});

export const editCml = (data, revalidate) => ({
  type: TASK.EDIT_CML, data, revalidate,
});
