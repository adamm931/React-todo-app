import TodoItem from './todoItem';
import { Guid } from 'guid-typescript';
import { FilterType } from '../constants/filterTypes';

export default class TodoState {
    Todos: TodoItem[];
    CurrentFilter: FilterType;
    
    constructor(todos: TodoItem[]) {
        this.Todos = todos;
        this.CurrentFilter = FilterType.All;
    }

    removeTodo = (id: Guid) => <TodoState> {
        ...this,
        Todos: this.Todos.filter(todo => todo.Id !== id)
    }

    addTodo = (id: Guid, name: string) => <TodoState>{ 
        ...this,
        Todos: [
            ...this.Todos, 
            new TodoItem(id, name)
        ] 
    };

    toggleTodo = (id: Guid) => {

        var todoToToggle = this.Todos.find(todo => todo.Id === id);

        if (todoToToggle === undefined) {
            return this;
        }

        todoToToggle.toogle();

        return <TodoState>{
             ...this,
            Todos: [...this.Todos, todoToToggle] 
        };
    }

    setFilter = (filterType: FilterType) => <TodoState>{
        ...this,
        CurrentFilter: filterType
    }

    getTodos = () => {
        switch  (this.CurrentFilter)
        {
            case FilterType.Completed: {
                return this.Todos.filter(todo => todo.Completed);
            }
            
            case FilterType.Uncompleted: {
                return this.Todos.filter(todo => !todo.Completed);
            }

            default: {
                return this.Todos;
            }
        }
    }
}