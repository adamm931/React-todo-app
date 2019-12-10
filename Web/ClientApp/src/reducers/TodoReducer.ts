import { ActionTypes} from '../constants/actionTypes'
import { AnyAction } from 'redux'
import TodoItemModel from '../model/TodoItemModel'
import { FilterType } from '../constants/filterTypes'
import { ITodoState } from '../model/ITodoState'

const initialState: ITodoState = {
    Todos: [],
    CurrentFilter: FilterType.All
}

const TodoReducer = (state: ITodoState = initialState, action: AnyAction): ITodoState => {
    switch (action.type) {
        case ActionTypes.AddTodo:
            return {
                ...state,
                Todos: [...state.Todos, action.todo] 
            }
        case ActionTypes.ToggleTodo:
            return {
                ...state,
                Todos: state.Todos.map(todo => {
                    if (todo.Id === action.id){
                        return {
                            ...todo,
                            Completed: !todo.Completed
                        }
                    }
                    return todo;
                })
            }
        case ActionTypes.DeleteTodo:
            return {
                ...state,
                Todos: state.Todos.filter(todo => todo.Id !== action.id)
            }
        case ActionTypes.SetTodoFilter:
            return {
                ...state,
                CurrentFilter: action.filter
            }
        case ActionTypes.ListTodo:
            return {
                ...state,
                Todos: action.todos.map((todo: any) => TodoItemModel.FromApiModel(todo)),
                CurrentFilter: FilterType.All
            }
        default:
            return state;
    }
}

export default TodoReducer