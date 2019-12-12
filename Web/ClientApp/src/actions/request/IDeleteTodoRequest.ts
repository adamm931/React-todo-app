import { Guid } from "guid-typescript";
import { IRequest } from "../base/IRequest";

export interface IDeleteTodoRequest extends IRequest {
    Id: Guid;
}