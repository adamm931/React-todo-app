import { IAddTodoAction } from "../action/IAddTodoAction";
import { ISetTodosAction } from "../action/ISetTodosAction";
import { ISetFilterAction } from "../action/ISetFilterAction";
import { IDeleteTodoAction } from "../action/IDeleteTodoAction";
import { IToggleTodoAction } from "../action/ToggleTodoAction";

// export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
// export const DELETE_TODO_ACTION= "DELETE_TODO_ACTION";
// export const TOGGLE_TODO_ACTION= "TOGGLE_TODO_ACTION";
// export const SET_TODOS_ACTION= "SET_TODOS_ACTION";
// export const SET_FILTER_ACTION= "SET_FILTER_ACTION";

export enum ActionsTypes {
    ADD_TODO = "ADD_TODO_ACTION",
    DELETE_TODO= "DELETE_TODO_ACTION",
    TOGGLE_TODO= "TOGGLE_TODO_ACTION",
    SET_TODOS= "SET_TODOS_ACTION",
    SET_FILTER= "SET_FILTER_ACTION"
}

export type IActions = IAddTodoAction 
    | ISetTodosAction 
    | ISetFilterAction 
    | IDeleteTodoAction 
    | IToggleTodoAction