import { IRequest } from "../base/IRequest";

export interface IAddTodoRequest extends IRequest {
    Name: string;
}