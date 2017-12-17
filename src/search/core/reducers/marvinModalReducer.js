import { TRIGGER } from '../constants';

const initState = {
  visible: false,
};

export const marvinModalReducer = (state = initState, action) => {
  switch (action.type) {
    case TRIGGER:
      return { visible: action.bool, typeAction: action.typeAction, cml: action.cml  };
    default:
      return state;
  }
};
