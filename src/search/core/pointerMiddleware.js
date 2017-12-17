import { addTask, addResult, addHistory } from './actions';
import { addBase64Obj, addBase64Arr } from '../../marvinAPI';

export const pointer = store => next => (action) => {
  if (action.meta) {
    if (action.entities && action.meta.pointer === 'task') {
      addBase64Obj(action.entities.task.structures[0],
        (data) => {
          const task = {
            base64: data.base64,
            cml: data.data,
            type: data.type,
          };

          store.dispatch(addTask(task));
        },
      );
    } else if (action.entities && action.meta.pointer === 'result') {
      addBase64Arr(action.entities.result.structures,
        (data1) => {
          const result = data1.map(obj => ({
            base64: obj.base64,
            cml: obj.data,
            models: obj.models,
          }));
          store.dispatch(addResult(result));
        });
    }
  }
  return next(action);
};
