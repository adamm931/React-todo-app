import TodoItemModel from "../../models/TodoItemModel"
import { IAction } from "../base/IAction"
import { ActionsTypes } from "../enums/ActionTypes"
// export const ADD_TODO_ACTION = "ADD_TODO_ACTION";

export interface IAddTodoAction extends IAction {
    Todo: TodoItemModel;
    type: typeof ActionsTypes.ADD_TODO;
}