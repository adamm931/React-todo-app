import { Guid } from "guid-typescript";
import { IAction } from "../base/IAction";
import { ActionsTypes } from "../enums/ActionTypes";

export interface IDeleteTodoAction extends IAction {
    Id: Guid;
    type: typeof ActionsTypes.DELETE_TODO
}