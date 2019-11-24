import { createStore } from 'redux';
import { todoHandler } from '../reducers/todoHandler';

const store = createStore(todoHandler);

export default store