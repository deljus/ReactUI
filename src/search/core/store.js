import { createStore, applyMiddleware } from 'redux';
import { queryMiddleware } from 'redux-query';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import { requestConfig } from '../../config';
import { pointer } from './pointerMiddleware';


const getQueries = state => state.queries;
const getEntities = state => state.entities;

const query = queryMiddleware(getQueries, getEntities, requestConfig);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(query, pointer)),
);

export default store;
