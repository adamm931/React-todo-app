import { IAction } from "../base/IAction";
import TodoItemModel from "../../models/TodoItemModel";
import { ActionsTypes } from "../enums/ActionTypes";


export interface ISetTodosAction extends IAction {
    Todos: TodoItemModel[];
    type: typeof ActionsTypes.SET_TODOS
}