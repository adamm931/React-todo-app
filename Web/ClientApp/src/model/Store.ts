import { createStore, applyMiddleware } from 'redux'
import TodoReducer from "../reducers/TodoReducer";
import createSagaMiddleware from 'redux-saga'
import * as TodoSagas from './TodoSagas'
import { ActionCreator } from '../actions/ActionCreator'

//create saga
const sagaMiddleware = createSagaMiddleware();

// create store and bind saga
const store = createStore(TodoReducer, applyMiddleware(sagaMiddleware));

// run saga
sagaMiddleware.run(TodoSagas.Watch);

// request list of todos
store.dispatch(ActionCreator.RequestListTodo())

export default store