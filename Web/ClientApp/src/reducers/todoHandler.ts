import { ActionTypes} from '../constants/actionTypes'
import { AnyAction } from 'redux'
import TodoState from '../model/TodoStateModel'
import TodoItemModel from '../model/TodoItemModel'

export const todoHandler = (state: TodoState = TodoState.Empty, action: AnyAction): TodoState => {
    switch (action.type) {
        case ActionTypes.AddTodo:
            return state.AddTodo(action.todo)
        case ActionTypes.ToggleTodo:
            return state.ToggleTodo(action.id)
        case ActionTypes.DeleteTodo:
            return state.DeleteTodo(action.id)
        case ActionTypes.SetTodoFilter:
            return state.SetFilter(action.filter)
        case ActionTypes.ListTodo:
            return new TodoState(action.todos.map((todo: any) => TodoItemModel.FromApiModel(todo)))
        default:
            return state;
    }
}