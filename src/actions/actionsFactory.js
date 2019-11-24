import * as actionTypes from '../constants/actionTypes';

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