import * as urls from "../constants/urls";
import axios from 'axios';

export const list = (filterType) => request('post', urls.Fitler, { filterType: filterType })

export const add = (name) => request('post', null, { name: name })

export const toggle = (id) => request('post', urls.Toggle, { id: id })

export const remove = (id) => request('delete', null, { id: id })

const request = (method, url = '', data) => createClient()
    .request({
        data: data,
        url: url,
        method: method
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