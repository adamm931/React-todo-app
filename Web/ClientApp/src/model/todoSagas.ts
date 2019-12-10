import { all, put, takeLatest, call } from 'redux-saga/effects'
import { TodoClient } from '../service/TodoClient'
import { FilterType } from '../constants/filterTypes'
import { ActionRequestTypes } from '../constants/actionTypes'
import { AnyAction } from 'redux'
import { ActionCreator } from '../actions/ActionCreator';
import TodoItemModel from './TodoItemModel'

const todoClient = TodoClient.Instance();

function* listTodoAsync() {
    try {
        let data = yield call(todoClient.ListAsync, FilterType.All);
        yield put(ActionCreator.ListTodo(data));
    }
    catch (error) {
        throw error;
    }
}

function* addTodoAsync({ text }: AnyAction) {
    try {
        var item = yield call(todoClient.AddAsync, text);
        var todo = TodoItemModel.FromApiModel(item);
        yield put(ActionCreator.AddTodo(todo));
    }
    catch (error) {
        throw error;
    }
}

function* toogleTodoAsync({ id }: AnyAction) {
    try {
        yield call(todoClient.ToogleAsync, id);
        yield put(ActionCreator.ToggleTodo(id));
    }
    catch (error) {
        throw error;
    }
}

function* deleteTodoAsync({ id }: AnyAction) {
    try {
        yield call(todoClient.DeleteAsync, id);
        yield put(ActionCreator.DeleteTodo(id));
    }
    catch (error) {
        throw error;
    }
}

function* setTodoFilterAsync({ filter }: AnyAction) {
    yield put(ActionCreator.SetFilter(filter))
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

export function* Watch() {
    yield all([
        watchListTodoAsync(),
        watchAddTodoAsync(),
        watchToogleTodoAsync(),
        watchDeleteTodoAsync(),
        watchSetTodoFilterAsync()
    ])
}