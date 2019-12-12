import TodoItemModel from "../models/TodoItemModel";
import { ITodoState } from "./ITodoState";
import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";

export interface ITodoStateManager {

    SetTodos(todos: TodoItemModel[]): ITodoState;

    AddTodo(todo: TodoItemModel): ITodoState;

    ToogleTodo(id: Guid): ITodoState;

    DeleteTodo(id: Guid): ITodoState;

    SetFilter(filterType: FilterType): ITodoState;
}