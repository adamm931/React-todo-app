import TodoItemModel from "../models/TodoItemModel";
import { FilterType } from "../constants/filterTypes";

export interface ITodoState {
    Todos: TodoItemModel[];
    CurrentFilter: FilterType;
}