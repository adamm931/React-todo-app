import { Guid } from 'guid-typescript';
import { FilterType } from '../constants/filterTypes';
import TodoItemModel from './TodoItemModel';

export default class TodoState {
    Todos: TodoItemModel[];
    CurrentFilter: FilterType;

    static Empty = new TodoState([]);
    
    constructor(todos: TodoItemModel[]) {
        this.Todos = todos;
        this.CurrentFilter = FilterType.All;
    }

    DeleteTodo = (id: Guid) => <TodoState> {
        ...this,
        Todos: this.Todos.filter(todo => todo.Id !== id)
    }

    AddTodo = (todo: TodoItemModel) => <TodoState>{ 
        ...this,
        Todos: [...this.Todos, todo] 
    };

    ToggleTodo = (id: Guid) => {

        var todoToToggle = this.Todos.find(todo => todo.Id === id);

        if (todoToToggle === undefined) {
            return this;
        }

        todoToToggle.Toogle();

        return <TodoState>{
             ...this,
            Todos: [...this.Todos, todoToToggle] 
        };
    }

    SetFilter = (filterType: FilterType) => <TodoState>{
        ...this,
        CurrentFilter: filterType
    }

    GetTodos = () => {
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