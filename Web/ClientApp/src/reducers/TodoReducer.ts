import TodoItemModel from '../models/TodoItemModel'
import { FilterType } from '../constants/filterTypes'
import { ITodoState } from '../state/ITodoState'
import { IActions, ActionsTypes } from '../actions/enums/ActionTypes'
import { TodoStateManger } from '../state/TodoStateManager'

const initialState: ITodoState = {
    Todos: [],
    CurrentFilter: FilterType.All
}

const TodoReducer = (state: ITodoState = initialState, action: IActions): ITodoState => {

    var stateManager = TodoStateManger.Create(state);

    switch (action.type) {
        case ActionsTypes.ADD_TODO:
            return stateManager.AddTodo(action.Todo)
        case ActionsTypes.TOGGLE_TODO:
            return stateManager.ToogleTodo(action.Id)
        case ActionsTypes.DELETE_TODO:
            return stateManager.DeleteTodo(action.Id)
        case ActionsTypes.SET_FILTER:
            return stateManager.SetFilter(action.FilterType)
        case ActionsTypes.SET_TODOS:
            var todos = action.Todos.map((todo: any) => TodoItemModel.FromApiModel(todo))
            return stateManager.SetTodos(todos)
        default:
            return state;
    }
}

export default TodoReducer