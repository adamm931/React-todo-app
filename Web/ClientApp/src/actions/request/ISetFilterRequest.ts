import { FilterType } from "../../constants/filterTypes";
import { IRequest } from "../base/IRequest";

export interface ISetFilterRequest extends IRequest {
    FilterType: FilterType;
}