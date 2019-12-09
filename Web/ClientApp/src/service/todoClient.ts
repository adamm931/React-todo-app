import * as urls from "../constants/urls";
import axios from 'axios';
import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";

export const list = (filterType : FilterType) => request(HttpMethod.POST, urls.Fitler, TodoRequestBody.FromFilterType(filterType))

export const add = (name: string) => request(HttpMethod.POST, undefined, TodoRequestBody.FromName(name))

export const toggle = (id: Guid) => request(HttpMethod.POST, urls.Toggle, TodoRequestBody.FromId(id))

export const remove = (id: Guid) => request(HttpMethod.DELETE, undefined, TodoRequestBody.FromId(id))

const request = (method: HttpMethod, url: string | undefined = '', data: TodoRequestBody) => createClient()
    .request({
        data: data,
        url: url,
        method: HttpMethod.DELETE
    })
    .then(response => response.data)
    .catch(error => {
        console.log(error)
        return [];
    })

const createClient = () => axios.create({
    baseURL: urls.Api,
    headers: {
        'Content-Type': 'application/json'
    }
})

enum HttpMethod {
    POST = "post",
    DELETE = "delete",
}

class TodoRequestBody {
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