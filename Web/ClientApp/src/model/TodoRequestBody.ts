import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";

export class TodoRequestBody {
    FilterType?: FilterType;
    Name?: string;
    Id?: Guid;

    static FromName = (name: string) => {
        return <TodoRequestBody>
        {
            Name: name
        }
    }

    static FromId = (id: Guid) => {
        return <TodoRequestBody>
        {
            Id: id
        }
    }

    static FromFilterType = (filterType: FilterType) => {
        return <TodoRequestBody>
        {
            FilterType: filterType
        }
    }
}