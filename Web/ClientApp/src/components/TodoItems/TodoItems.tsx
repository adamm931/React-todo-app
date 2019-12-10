import { connect } from 'react-redux';
import './TodoItems.css';
import { ITodoItemsProps } from './States/ITodoItemsProps';
import TodoState from '../../model/TodoStateModel';
import React from 'react';
import SearchTodos from '../SearchTodos/SearchTodos';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

const TodoItems: React.FunctionComponent<ITodoItemsProps> = ({Todos}) => {
    return (
        <div className="todo-list">
            <h4> Todo list: </h4>
                <SearchTodos />
                <AddTodo />
                <ul>
                    { 
                        Todos === undefined ? [] : Todos.map((item, index) =>
                        <TodoItem
                            key={index}
                            TodoItem={item}
                        />)
                    }
                </ul>
        </div>
    )
}
        
const mapStateToProps = (state: TodoState): ITodoItemsProps => ({
    Todos: state.GetTodos()
})

export default connect<ITodoItemsProps, {}, {}, TodoState>(
    mapStateToProps
)(TodoItems)