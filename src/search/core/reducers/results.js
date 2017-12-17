import { RESULT } from '../constants';

export const results = (state = null, action) => {
  switch (action.type) {
    case RESULT.ADD:
      return action.arr;

    default:
      return state;
  }
};
