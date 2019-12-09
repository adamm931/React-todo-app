import { Guid } from 'guid-typescript'

export default class TodoItem {
    Id: Guid;
    Name: string;
    Completed: boolean;

    constructor(id: Guid, name: string) {
        this.Id = id;
        this.Name = name;
        this.Completed = false;
    }

    toogle = () => {
        this.Completed = !this.Completed;
    } 
}