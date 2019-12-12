import { ITodoStateManager } from "./ITodoStateManager";
import TodoItemModel from "../models/TodoItemModel";
import { ITodoState } from "./ITodoState";
import { Guid } from "guid-typescript";
import { FilterType } from "../constants/filterTypes";

export class TodoStateManger implements ITodoStateManager {
    
    private _state: ITodoState;

    private constructor(state: ITodoState) {
        this._state = state;
    }

    public static Create(state: ITodoState) {
        return new TodoStateManger(state);
    }

    SetTodos(todos: TodoItemModel[]): ITodoState {
        return {
            ...this._state,
            Todos: todos
        }
    }

    AddTodo(todo: TodoItemModel): ITodoState {
        return {
            ...this._state,
            Todos: [...this._state.Todos, todo]
        }
    }

    ToogleTodo(id: Guid): ITodoState {
        return {
            ...this._state,
            Todos: this._state.Todos.map(todo => {
                if (todo.Id === id){
                    return {
                        ...todo,
                        Completed: !todo.Completed
                    }
                }
                return todo;
            })
        }
    }

    DeleteTodo(id: Guid): ITodoState {
        return {
            ...this._state,
            Todos: this._state.Todos.filter(todo => todo.Id !== id)
        }
    }

    SetFilter(filterType: FilterType): ITodoState {
        return {
            ...this._state,
            CurrentFilter: filterType
        }
    }
}