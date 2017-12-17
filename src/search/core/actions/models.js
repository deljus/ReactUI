import { MODELS } from '../constants';

export const addModels = models => ({
  type: MODELS.ADD, models,
});

export const selectModel = value => ({
  type: MODELS.ADD, value,
});
