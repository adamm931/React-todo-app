import { ActionTypes, ActionRequestTypes } from '../constants/actionTypes';

// sync
export const listTodo = (todos) => ({
    type: ActionTypes.ListTodo,
    todos: todos
})

export const addTodo = name => ({
    id: Date.now(),
    type: ActionTypes.AddTodo,
    name,
})

export const toggleTodo = id => ({
    id,
    type: ActionTypes.ToggleTodo
})

export const deleteTodo = id => ({
    id,
    type: ActionTypes.DeleteTodo
})

export const setFilter = filterType => ({
    filter: filterType,
    type: ActionTypes.SetTodoFilter
})

// async
export const requestListTodo = () => ({
    type: ActionRequestTypes.ListTodo
})

export const requestAddTodo = text => ({
    id: Date.now(),
    type: ActionRequestTypes.AddTodo,
    text,
})

export const requestToggleTodo = id => ({
    id,
    type: ActionRequestTypes.ToggleTodo
})

export const requestDeleteTodo = id => ({
    id,
    type: ActionRequestTypes.DeleteTodo
})

export const requestSetFilter = filterType => ({
    filter: filterType,
    type: ActionRequestTypes.SetTodoFilter
})