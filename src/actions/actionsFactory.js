import * as actionTypes from '../constants/actionTypes';

// sync
export const addTodo = text => ({
    id: Date.now(),
    type: actionTypes.AddTodo,
    text,
})

export const toggleTodo = id => ({
    id,
    type: actionTypes.ToggleTodo
})

export const deleteTodo = id => ({
    id,
    type: actionTypes.DeleteTodo
})

export const setFilter = filterType => ({
    filter: filterType,
    type: actionTypes.SetTodoFilter
})

// async
export const requestAddTodo = text => ({
    id: Date.now(),
    type: actionTypes.RequestAddTodo,
    text,
})

export const requestToggleTodo = id => ({
    id,
    type: actionTypes.RequestToggleTodo
})

export const requestDeleteTodo = id => ({
    id,
    type: actionTypes.RequestDeleteTodo
})

export const requestSetFilter = filterType => ({
    filter: filterType,
    type: actionTypes.RequestSetTodoFilter
})