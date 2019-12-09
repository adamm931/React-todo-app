import { ActionTypes} from '../constants/actionTypes'
import { AnyAction } from 'redux'
import TodoState from '../model/todoState'

export const todoHandler = (state: TodoState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.AddTodo:
            return state.addTodo(action.id, action.name)
        case ActionTypes.ToggleTodo:
            return state.toggleTodo(action.id)
        case ActionTypes.DeleteTodo:
            return state.removeTodo(action.id)
        case ActionTypes.SetTodoFilter:
            return state.setFilter(action.filter)
        case ActionTypes.ListTodo:
            return new TodoState(action.todos)
        default:
            return state;
    }
}