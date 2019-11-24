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
            <div className={css} >
                {this.props.item.text}
            </div>
            <input
                type="checkbox"
                checked={this.props.item.completed}
                onChange={this.props.toggleTodo}
            />
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
        toggleTodo: () => dispatch(actions.toggleTodo(id)),
        deleteTodo: () => dispatch(actions.deleteTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)