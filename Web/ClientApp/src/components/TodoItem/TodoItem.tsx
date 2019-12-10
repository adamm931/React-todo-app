import React, { Component } from 'react';
import './TodoItem.css';
import { connect } from 'react-redux'
import { ITodoItemProps } from './States/ITodoItemProps'
import { ITodoItemDispatch } from './States/ITodoItemDispatch';
import { ActionCreator } from "../../actions/ActionCreator";

type ITodoItemComponentProps = ITodoItemProps & ITodoItemDispatch

const TodoItem: React.FunctionComponent<ITodoItemComponentProps> = ({TodoItem, ToggleTodo, DeleteTodo}) => {

    let css = "todo-item";

    if (TodoItem.Completed) {
        css += " todo-item-comleted";
    }
    
    return (<li>
        <label className="todo-item-container pointer">
            <div className={css} >
                {TodoItem.Name}
            </div>
            <input
                type="checkbox"
                checked={TodoItem.Completed}
                onChange={ToggleTodo}
            />
        </label>
        <button
            className="remove-todo-btn"
            onClick={DeleteTodo}>
            Delete
        </button>
    </li>)
}

const mapDispatchToProps = (dispatch: any, ownProps: ITodoItemProps): ITodoItemDispatch => ({
    ToggleTodo: () => dispatch(ActionCreator.RequestToggleTodo(ownProps.TodoItem.Id)),
    DeleteTodo: () => dispatch(ActionCreator.RequestDeleteTodo(ownProps.TodoItem.Id))
})

export default connect(null, mapDispatchToProps)(TodoItem)