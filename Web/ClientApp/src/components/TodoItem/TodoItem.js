import React, { Component } from 'react';
import './TodoItem.css';
import * as actions from '../../actions/actionsFactory';
import { connect } from 'react-redux'

class TodoItem extends Component {
    render() {

        let css = "todo-item";

        if (this.props.item.completed) {
            css += " todo-item-comleted";
        }

        return <li>
            <label className="todo-item-container pointer">
                <div className={css} >
                    {this.props.item.name}
                </div>
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={this.props.toggleTodo}
                />
            </label>
            <button
                className="remove-todo-btn"
                onClick={this.props.deleteTodo}>
                Delete
            </button>
        </li>;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    let id = props.item.id;

    return {
        toggleTodo: () => dispatch(actions.requestToggleTodo(id)),
        deleteTodo: () => dispatch(actions.requestDeleteTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)