import { IListTodosRequest } from "../request/IListTodosRequest";
import { IAddTodoRequest } from "../request/IAddTodoRequest";
import { Guid } from "guid-typescript";
import { FilterType } from "../../constants/filterTypes";
import { IToggleTodoRequest } from "../request/IToggleTodoRequest";
import { IDeleteTodoRequest } from "../request/IDeleteTodoRequest";
import { RequestTypes } from "../enums/RequestTypes";

export class RequestCreator {
    
    public static ListTodos = (): IListTodosRequest => ({
        type: RequestTypes.LIST_TODOS
    })

    public static AddTodo = (name: string): IAddTodoRequest => ({
        type: RequestTypes.ADD_TODO,
        Name: name
    })

    public static ToggleTodo = (id: Guid): IToggleTodoRequest => ({
        type: RequestTypes.TOGGLE_TODO,
        Id: id
     })

    public static DeleteTodo = (id: Guid): IDeleteTodoRequest => ({
        type: RequestTypes.DELETE_TODO,
        Id: id
     })

    public static SetFilter = (filterType: FilterType) => ({
        type: RequestTypes.SET_TODO,
        FilterType: filterType
    })
}