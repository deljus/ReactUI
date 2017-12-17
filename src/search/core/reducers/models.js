import { MODELS } from '../constants';

export const models = (state = null, action) => {
  switch (action.type) {
      case MODELS.ADD:
      return state;

    case MODELS.SELECT:
      return state;

    default:
      return state;
  }
};
