import { TRIGGER } from '../constants';

export const marvinModal = (bool, typeAction, cml) => ({
  type: TRIGGER, bool, typeAction, cml,
});
