import queryString from 'query-string';
import { API } from '../../config';

export const validateTasks = data => ({
  url: API.CREATE_TASK_SEARCH,
  body: data,
  options: { credentials: 'include', headers: { 'Content-Type': 'application/json' } },
});

export const getModels = () => ({
  url: API.MODELS,
  transform: body => ({
    models: body.map(o => ({ label: o.name, value: o.model, type: o.type, description: o.description })),
  }),
  update: {
    models: (prev, next) => next,
  },
  options: { credentials: 'include' },
});

export const getTasks = () => {
  const taskId = queryString.parse(window.location.hash)['/validate?task'];
  return {
    url: API.PREPARE_TASK + taskId,
    transform: body => ({
      task: body,
    }),
    update: {
      task: (prev, next) => next,
    },
    options: {
      credentials: 'include',
      headers: { 'Content-Type': '*/*' },
    },
    meta: {
      pointer: 'task',
    },
    force: true,
  };
};

export const getResults = () => {
  const taskId = queryString.parse(window.location.hash)['/result?task'];
  return {
    url: API.RESULT + taskId,
    transform: body => ({
      result: body,
    }),
    update: {
      result: (prev, next) => next,
    },
    options: {
      credentials: 'include',
      headers: { 'Content-Type': '*/*' },
    },
    meta: {
      pointer: 'result',
    },
    force: true,
  };
};

export const revalidateTask = (cml) => {
  const taskId = queryString.parse(window.location.hash)['/validate?task'];
  return {
    url: API.PREPARE_TASK + taskId,
    body: { data: cml },
    options: { credentials: 'include' },
  };
};

export const resultTask = (data) => {
  const taskId = queryString.parse(window.location.hash)['/validate?task'];
  return {
    url: API.RESULT + taskId,
    body: data,
    options: { credentials: 'include' },
  };
};
