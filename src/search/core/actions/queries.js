import { mutateAsync } from 'redux-query';
import { validateTasks, revalidateTask, resultTask } from '../queries';

export const validateTaskOuery = tasks => mutateAsync(validateTasks(tasks));
export const revalidatingTaskQuery = tasks => mutateAsync(revalidateTask(tasks));
export const resultTaskOuery = tasks => mutateAsync(resultTask(tasks));