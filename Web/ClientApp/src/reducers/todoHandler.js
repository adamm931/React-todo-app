import * as actionTypes from '../constants/actionTypes'

export const todoHandler = (state = [], action) => {
    switch (action.type) {
        case actionTypes.AddTodo:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        name: action.name,
                        completed: false
                    }]
            }
        case actionTypes.ToggleTodo:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.id) {
                        return { ...item, completed: !item.completed }
                    }
                    return item
                })
            }
        case actionTypes.DeleteTodo:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            }
        case actionTypes.SetTodoFilter:
            return {
                ...state,
                filter: action.filter
            }
        case actionTypes.ListTodo:
            return {
                ...state,
                todos: action.todos
            }
        default:
            return state;
    }
}