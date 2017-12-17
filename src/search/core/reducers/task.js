import { TASK } from '../constants';

export const task = (state = null, action) => {
  switch (action.type) {
    case TASK.ADD:
      return { ...action.arr };

      case TASK.EDIT_CML:
      return  { ...state, ...action.data, revalidate: action.revalidate };

    default:
      return state;
  }
};
