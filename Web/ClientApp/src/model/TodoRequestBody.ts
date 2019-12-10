import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";

export class TodoRequestBody {
    FilterType?: FilterType;
    Name?: string;
    Id?: Guid;

    static FromName = (name: string): TodoRequestBody => {
        return {
            Name: name
        }
    }

    static FromId = (id: Guid): TodoRequestBody => {
        return {
            Id: id
        }
    }

    static FromFilterType = (filterType: FilterType): TodoRequestBody => {
        return  {
            FilterType: filterType
        }
    }
}