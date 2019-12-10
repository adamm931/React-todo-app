import * as urls from "../constants/urls";
import axios from 'axios';
import { FilterType } from "../constants/filterTypes";
import { Guid } from "guid-typescript";
import { ITodoClient } from "./ITodoClient";
import { HttpMethod } from "../model/HttpMethod";
import { TodoRequestBody } from "../model/TodoRequestBody";

export class TodoClient implements ITodoClient {

    ListAsync = async (filterType: FilterType): Promise<any> => 
        await this.request(HttpMethod.Post, urls.Fitler, TodoRequestBody.FromFilterType(filterType))
    
    AddAsync = async (name: string): Promise<any> => 
        await this.request(HttpMethod.Post, undefined, TodoRequestBody.FromName(name))

    ToogleAsync = async (id: Guid): Promise<any> => 
        await this.request(HttpMethod.Post, urls.Toggle, TodoRequestBody.FromId(id))

    DeleteAsync = async (id: Guid): Promise<any> =>
        await this.request(HttpMethod.Delete, undefined, TodoRequestBody.FromId(id))

    static Instance = (): ITodoClient => new TodoClient()

    async request(method: HttpMethod, url: string | undefined = '', data: TodoRequestBody) { 
        try {
            const response = await this.createClient()
                .request({
                    data: data,
                    url: url,
                    method: method
                });
            return response.data;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    createClient = () => axios.create({
        baseURL: urls.Api,
        headers: {
        'Content-Type': 'application/json'
        }
    })
}