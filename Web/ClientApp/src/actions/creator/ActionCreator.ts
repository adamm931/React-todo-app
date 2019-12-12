import { Guid } from 'guid-typescript';
import TodoItemModel from '../../models/TodoItemModel';
import { FilterType } from '../../constants/filterTypes';
import { IActions, ActionsTypes } from '../enums/ActionTypes';

export class ActionCreator {

    public static SetTodos = (todos: TodoItemModel[]): IActions  => ({
        type: ActionsTypes.SET_TODOS,
        Todos: todos
    })

    public static AddTodo = (todo: TodoItemModel) : IActions => ({
        type: ActionsTypes.ADD_TODO,
        Todo: todo
    })

    public static ToggleTodo = (id: Guid) : IActions => ({
        type: ActionsTypes.TOGGLE_TODO,
        Id: id
    })

    public static DeleteTodo = (id: Guid): IActions => ({
        type: ActionsTypes.DELETE_TODO,
        Id: id
    })

    public static SetFilter = (filterType: FilterType) : IActions => ({
        type: ActionsTypes.SET_FILTER,
        FilterType: filterType
    })

}