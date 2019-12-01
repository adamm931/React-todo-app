import { createStore, applyMiddleware } from 'redux'
import { todoHandler } from '../reducers/todoHandler'
import createSagaMiddleware from 'redux-saga'
import * as todoSaga from '../model/todoSagas'

//create saga
const saga = createSagaMiddleware();

// create store and bind saga
const store = createStore(todoHandler, applyMiddleware(saga));

// run saga
saga.run(todoSaga.watch);

export default store