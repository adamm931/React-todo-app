import { Guid } from "guid-typescript";
import { IAction } from "../base/IAction";
import { ActionsTypes } from "../enums/ActionTypes";

export interface IToggleTodoAction extends IAction {
    Id: Guid;
    type: typeof ActionsTypes.TOGGLE_TODO
}