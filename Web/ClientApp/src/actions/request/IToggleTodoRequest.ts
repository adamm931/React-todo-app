import { Guid } from "guid-typescript";
import { IRequest } from "../base/IRequest";

export interface IToggleTodoRequest extends IRequest {
    Id: Guid;
}