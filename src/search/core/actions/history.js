import { HISTORY } from '../constants';

export const addHistory = arr => ({
    type: HISTORY.ADD, arr,
});