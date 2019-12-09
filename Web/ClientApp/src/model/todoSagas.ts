import { all, put, takeLatest, call, takeEvery } from 'redux-saga/effects'
import * as actionCreators from '../actions/actionsFactory'
import * as todoClient from '../service/todoClient'
import { FilterType } from '../constants/filterTypes'
import { ActionRequestTypes } from '../constants/actionTypes'
import { AnyAction } from 'redux'

function* listTodoAsync() {
    try {
        let data = yield call(todoClient.list, FilterType.All);
        yield put(actionCreators.listTodo(data));
    }
    catch (error) {
        throw error;
    }
}

function* addTodoAsync({ text }: AnyAction) {
    try {
        yield call(todoClient.add, text);
        yield put(actionCreators.addTodo(text));
    }
    catch (error) {
        throw error;
    }
}

function* toogleTodoAsync({ id }: AnyAction) {
    try {
        yield call(todoClient.toggle, id);
        yield put(actionCreators.toggleTodo(id));
    }
    catch (error) {
        throw error;
    }
}

function* deleteTodoAsync({ id }: AnyAction) {
    try {
        yield call(todoClient.remove, id);
        yield put(actionCreators.deleteTodo(id));
    }
    catch (error) {
        throw error;
    }
    yield put(actionCreators.deleteTodo(id))
}

function* setTodoFilterAsync({ filter }: AnyAction) {
    yield put(actionCreators.setFilter(filter))
}

function* watchAddTodoAsync() {
    yield takeLatest(ActionRequestTypes.AddTodo, addTodoAsync);
}

function* watchToogleTodoAsync() {
    yield takeLatest(ActionRequestTypes.ToggleTodo, toogleTodoAsync);
}

function* watchDeleteTodoAsync() {
    yield takeLatest(ActionRequestTypes.DeleteTodo, deleteTodoAsync);
}

function* watchSetTodoFilterAsync() {
    yield takeLatest(ActionRequestTypes.SetTodoFilter, setTodoFilterAsync);
}

function* watchListTodoAsync() {
    yield takeLatest(ActionRequestTypes.ListTodo, listTodoAsync);
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