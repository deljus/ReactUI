import { RESULT } from '../constants';

export const addResult = arr => ({
    type: RESULT.ADD, arr,
});