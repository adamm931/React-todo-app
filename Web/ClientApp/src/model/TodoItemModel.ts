import { Guid } from 'guid-typescript'

export default class TodoItemModel {
    Id: Guid;
    Name: string;
    Completed: boolean;

    constructor(id: Guid, name: string, completed: boolean) {
        this.Id = id;
        this.Name = name;
        this.Completed = completed;
    }

    static FromApiModel = (apiModel: any):TodoItemModel => new TodoItemModel(
        apiModel.id,
        apiModel.name,
        apiModel.completed
    )
}