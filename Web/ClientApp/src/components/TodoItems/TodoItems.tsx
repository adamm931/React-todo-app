import { connect } from 'react-redux';
import './TodoItems.css';
import { ITodoItemsProps } from './States/ITodoItemsProps';
import React from 'react';
import SearchTodos from '../SearchTodos/SearchTodos';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import { ITodoState } from '../../model/ITodoState';
import TodoItemModel from '../../model/TodoItemModel';
import { FilterType } from '../../constants/filterTypes';

class TodoItems extends React.Component<ITodoItemsProps> {
    render() {
        return (
            <div className="todo-list">
                <h4> Todo list: </h4>
                    <SearchTodos />
                    <AddTodo />
                    <ul>
                        { 
                            this.props.Todos === undefined ? [] : this.props.Todos.map((item, index) =>
                            <TodoItem
                                key={index}
                                TodoItem={item}
                            />)
                        }
                    </ul>
            </div>
        )
    }
}
        
const mapStateToProps = (state: ITodoState): ITodoItemsProps => {
    return {
        Todos: filterTodos(state),
    }
}

const filterTodos = (state: ITodoState): TodoItemModel[] => {
    switch (state.CurrentFilter)
        {
            case FilterType.Completed: {
                return state.Todos.filter(todo => todo.Completed);
            }
            
            case FilterType.Uncompleted: {
                return state.Todos.filter(todo => !todo.Completed);
            }

            default: {
                return state.Todos;
            }
        }
}

export default connect<ITodoItemsProps, {}, {}, ITodoState>(
    mapStateToProps
)(TodoItems)