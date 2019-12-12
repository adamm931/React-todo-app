import { FilterType } from "../../constants/filterTypes";
import { IAction } from "../base/IAction";
import { ActionsTypes } from "../enums/ActionTypes";


export interface ISetFilterAction extends IAction {
    FilterType: FilterType;
    type: typeof ActionsTypes.SET_FILTER
}