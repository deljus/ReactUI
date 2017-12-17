import { HISTORY } from '../constants';

export const history = (state = [], action) => {
  switch (action.type) {
    case HISTORY.ADD:
      state.push(action.arr);
      return state;
    default:
      return state;
  }
};
