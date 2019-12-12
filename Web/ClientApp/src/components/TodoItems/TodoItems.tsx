import { connect } from 'react-redux';
import './TodoItems.css';
import { ITodoItemsProps } from './States/ITodoItemsProps';
import React, { Dispatch } from 'react';
import SearchTodos from '../SearchTodos/SearchTodos';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import { ITodoState } from '../../state/ITodoState';
import TodoItemModel from '../../models/TodoItemModel';
import { FilterType } from '../../constants/filterTypes';
import { ITodoItemsDispatch } from './States/ITodoItemsDispatch';
import { IListTodosRequest } from '../../actions/request/IListTodosRequest';
import { RequestCreator } from '../../actions/creator/RequestCreator';

class TodoItems extends React.Component<ITodoItemsProps & ITodoItemsDispatch> {
    
    componentDidMount() {
        this.props.ListTodosRequest();
    }

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

const mapStateToDispatch = (dispatch: Dispatch<IListTodosRequest>): ITodoItemsDispatch => {
    return {
        ListTodosRequest: () => dispatch(RequestCreator.ListTodos()),
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

export default connect<ITodoItemsProps, ITodoItemsDispatch, {}, ITodoState>(
    mapStateToProps,
    mapStateToDispatch
)(TodoItems)