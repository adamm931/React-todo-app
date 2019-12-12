import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";

export interface ITodoClient {

    ListAsync(filterType: FilterType): Promise<any>;

    AddAsync(name: string): Promise<any>;

    ToogleAsync(id: Guid): Promise<any>;

    DeleteAsync(id: Guid): Promise<any>;
}