import { all, put, takeLatest, call } from 'redux-saga/effects'
import * as actionCreators from '../actions/actionsFactory'
import * as actionTypes from '../constants/actionTypes'
import * as todoClient from '../service/todoClient'
import * as filterTypes from '../constants/filterTypes'

function* listTodoAsync() {
    try {
        let data = yield call(todoClient.list, filterTypes.All);
        yield put(actionCreators.listTodo(data));
    }
    catch (error) {
        throw error;
    }
}

function* addTodoAsync({ text }) {
    try {
        yield call(todoClient.add, text);
        yield put(actionCreators.addTodo(text));
    }
    catch (error) {
        throw error;
    }
}

function* toogleTodoAsync({ id }) {
    try {
        yield call(todoClient.toggle, id);
        yield put(actionCreators.toggleTodo(id));
    }
    catch (error) {
        throw error;
    }
}

function* deleteTodoAsync({ id }) {
    try {
        yield call(todoClient.remove, id);
        yield put(actionCreators.deleteTodo(id));
    }
    catch (error) {
        throw error;
    }
    yield put(actionCreators.deleteTodo(id))
}

function* setTodoFilterAsync({ filter }) {
    yield put(actionCreators.setFilter(filter))
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

function* watchListTodoAsync() {
    yield takeLatest(actionTypes.RequestListTodo, listTodoAsync);
}

export function* watch() {
    yield all([
        watchListTodoAsync(),
        watchAddTodoAsync(),
        watchToogleTodoAsync(),
        watchDeleteTodoAsync(),
        watchSetTodoFilterAsync()
    ])
} 