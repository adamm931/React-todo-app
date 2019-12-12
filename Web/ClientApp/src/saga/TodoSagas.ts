import { all, put, takeLatest, call } from 'redux-saga/effects'
import { TodoClient } from '../client/TodoClient'
import { FilterType } from '../constants/filterTypes'
import { ActionCreator } from '../actions/creator/ActionCreator';
import TodoItemModel from '../models/TodoItemModel'
import { IAddTodoRequest } from '../actions/request/IAddTodoRequest'
import { IToggleTodoRequest } from '../actions/request/IToggleTodoRequest'
import { ISetFilterRequest } from '../actions/request/ISetFilterRequest';
import { IDeleteTodoRequest } from '../actions/request/IDeleteTodoRequest';
import { RequestTypes } from '../actions/enums/RequestTypes';

const todoClient = TodoClient.Instance();

function* listTodoAsync() {
    try {
        let data = yield call(todoClient.ListAsync, FilterType.All);
        yield put(ActionCreator.SetTodos(data));
    }
    catch (error) {
        throw error;
    }
}

function* addTodoAsync(request: IAddTodoRequest) {
    try {
        var item = yield call(() => todoClient.AddAsync(request.Name));
        var todo = TodoItemModel.FromApiModel(item);
        yield put(ActionCreator.AddTodo(todo));
    }
    catch (error) {
        throw error;
    }
}

function* toogleTodoAsync(request: IToggleTodoRequest) {
    try {
        yield call(() => todoClient.ToogleAsync(request.Id));
        yield put(ActionCreator.ToggleTodo(request.Id));
    }
    catch (error) {
        throw error;
    }
}

function* deleteTodoAsync(request: IDeleteTodoRequest) {
    try {
        yield call(() => todoClient.DeleteAsync(request.Id));
        yield put(ActionCreator.DeleteTodo(request.Id));
    }
    catch (error) {
        throw error;
    }
}

function* setTodoFilterAsync(request: ISetFilterRequest) {
    yield put(ActionCreator.SetFilter(request.FilterType))
}

function* watchAddTodoAsync() {
    yield takeLatest(RequestTypes.ADD_TODO,  addTodoAsync);
}

function* watchToogleTodoAsync() {
    yield takeLatest(RequestTypes.TOGGLE_TODO, toogleTodoAsync);
}

function* watchDeleteTodoAsync() {
    yield takeLatest(RequestTypes.DELETE_TODO, deleteTodoAsync);
}

function* watchSetTodoFilterAsync() {
    yield takeLatest(RequestTypes.SET_TODO, setTodoFilterAsync);
}

function* watchListTodoAsync() {
    yield takeLatest(RequestTypes.LIST_TODOS, listTodoAsync);
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