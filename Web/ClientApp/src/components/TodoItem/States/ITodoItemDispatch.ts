import { Guid } from "guid-typescript";

export interface ITodoItemDispatch {
    ToggleTodo: () => void;
    DeleteTodo: () => void;
}