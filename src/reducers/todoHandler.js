import * as actionTypes from '../constants/actionTypes'
import * as filterTypes from '../constants/filterTypes'

export const todoHandler = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AddTodo:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
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
        default:
            return state;
    }
}

let initialState = {
    filter: filterTypes.All,
    todos: [
        {
            id: Date.now(),
            text: 'Buy Milk',
            completed: false
        },
        {
            id: Date.now() + 1,
            text: 'Make Bed',
            completed: false
        }
    ]
}