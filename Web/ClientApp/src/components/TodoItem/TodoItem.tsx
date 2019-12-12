import React from 'react';
import './TodoItem.css';
import { connect } from 'react-redux'
import { ITodoItemProps } from './States/ITodoItemProps'
import { ITodoItemDispatch } from './States/ITodoItemDispatch';
import { RequestCreator } from '../../actions/creator/RequestCreator';

type ITodoItemComponentProps = ITodoItemProps & ITodoItemDispatch

class TodoItem extends React.Component<ITodoItemComponentProps> {
    render() {

        console.log('TodoItem - com', this.props)

        let css = "todo-item";

        if (this.props.TodoItem.Completed) {
            css += " todo-item-comleted";
        }

        return (<li>
            <label className="todo-item-container pointer">
                <div className={css} >
                    {this.props.TodoItem.Name}
                </div>
                <input
                    type="checkbox"
                    checked={this.props.TodoItem.Completed}
                    onChange={this.props.ToggleTodo}
                />
            </label>
            <button
                className="remove-todo-btn"
                onClick={this.props.DeleteTodo}>
                Delete
            </button>
        </li>) 
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: ITodoItemProps): ITodoItemDispatch => ({
    ToggleTodo: () => dispatch(RequestCreator.ToggleTodo(ownProps.TodoItem.Id)),
    DeleteTodo: () => dispatch(RequestCreator.DeleteTodo(ownProps.TodoItem.Id))
})

export default connect(null, mapDispatchToProps)(TodoItem)