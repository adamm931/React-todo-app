import { ActionTypes, ActionRequestTypes } from '../constants/actionTypes';
import { Guid } from 'guid-typescript';
import TodoItemModel from '../model/TodoItemModel';
import { FilterType } from '../constants/filterTypes';

export class ActionCreator {

    // sync
    static ListTodo = (todos: TodoItemModel[]) => ({
        type: ActionTypes.ListTodo,
        todos: todos
    })

    static AddTodo = (todo: TodoItemModel) => ({
        todo,
        type: ActionTypes.AddTodo,
    })

    static ToggleTodo = (id: Guid) => ({
        id,
        type: ActionTypes.ToggleTodo
    })

    static DeleteTodo = (id: Guid) => ({
        id,
        type: ActionTypes.DeleteTodo
    })

    static SetFilter = (filterType: FilterType) => ({
        filter: filterType,
        type: ActionTypes.SetTodoFilter
    })

    // async
    static RequestListTodo = () => ({
        type: ActionRequestTypes.ListTodo
    })

    static RequestAddTodo = (text: string) => ({
        type: ActionRequestTypes.AddTodo,
        text,
    })

    static RequestToggleTodo = (id: Guid) => ({
        id,
        type: ActionRequestTypes.ToggleTodo
    })

    static RequestDeleteTodo = (id: Guid) => ({
        id,
        type: ActionRequestTypes.DeleteTodo
    })

    static RequestSetFilter = (filterType: FilterType) => ({
        filter: filterType,
        type: ActionRequestTypes.SetTodoFilter
    })
}