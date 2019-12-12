import { IAddTodoRequest } from "../request/IAddTodoRequest";
import { IDeleteTodoRequest } from "../request/IDeleteTodoRequest";
import { IToggleTodoRequest } from "../request/IToggleTodoRequest";
import { ISetFilterRequest } from "../request/ISetFilterRequest";
import { IListTodosRequest } from "../request/IListTodosRequest";

export enum RequestTypes {
    ADD_TODO = "ADD_TODO_REQUEST",
    DELETE_TODO = "DELETE_TODO_REQUEST",
    TOGGLE_TODO = "TOGGLE_TODO_REQUEST",
    LIST_TODOS = "LIST_TODO_REQUEST",
    SET_TODO = "SET_TODO_REQUEST"
}

export type IRequests = IAddTodoRequest
    | IDeleteTodoRequest
    | IToggleTodoRequest
    | ISetFilterRequest
    | IListTodosRequest
