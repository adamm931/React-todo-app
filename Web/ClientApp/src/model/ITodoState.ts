import TodoItemModel from "./TodoItemModel";
import { FilterType } from "../constants/filterTypes";

export interface ITodoState {
    Todos: TodoItemModel[];
    CurrentFilter: FilterType;
}