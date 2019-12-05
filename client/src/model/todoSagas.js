import { all, put, takeLatest } from 'redux-saga/effects'
import { } from "module";
import * as actions from '../actions/actionsFactory'; 
import * as actionTypes from '../constants/actionTypes';

function* addTodoAsync({ text }) {
    yield put(actions.addTodo(text))
}

function* toogleTodoAsync({ id }) {
    yield put(actions.toggleTodo(id))
}

function* deleteTodoAsync({ id }) {
    yield put(actions.deleteTodo(id))
}

function* setTodoFilterAsync({ filter }) {
    yield put(actions.setFilter(filter))
}

function* watchAddTodoAsync() {
    yield takeLatest(actionTypes.RequestAddTodo, addTodoAsync);
}

function* watchToogleTodoAsync() {
    yield takeLatest(actionTypes.RequestToggleTodo, toogleTodoAsync);
}

function* watchDeleteTodoAsync() {
    yield takeLatest(actionTypes.RequestDeleteTodo, deleteTodoAsync);
}

function* watchSetTodoFilterAsync() {
    yield takeLatest(actionTypes.RequestSetTodoFilter, setTodoFilterAsync);
}

export function* watch() {
    yield all([
        watchAddTodoAsync(),
        watchToogleTodoAsync(),
        watchDeleteTodoAsync(),
        watchSetTodoFilterAsync()
    ])
} 