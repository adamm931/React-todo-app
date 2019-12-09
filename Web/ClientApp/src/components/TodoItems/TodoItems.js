import React from 'react';
import { connect } from 'react-redux';
import './TodoItems.css';
import TodoItem from '../TodoItem/TodoItem';
import SearchTodos from '../SearchTodos/SearchTodos';
import AddTodo from '../AddTodo/AddTodo';
import * as filterTypes from '../../constants/filterTypes'
import * as actionFactory from '../../actions/actionsFactory'

class TodoItems extends React.Component {

    componentDidMount() {
        this.props.requestTodoList()
    }

    renderItems = () =>
        <ul>
            { this.props.todos === undefined ? [] : this.props.todos.map((item, index) =>
                <TodoItem
                    key={index}
                    item={item}
                />)}
        </ul>
    render() {
        return <div className="todo-list">
            <h4> Todo list: </h4>
            <SearchTodos />
            <AddTodo />
            {this.renderItems()}
        </div >
    }
}

const mapStateToProps = state => ({
    todos: state.getTodos()
})

const mapDispatchToProps = dispatch => ({
    requestTodoList: () => dispatch(actionFactory.requestListTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItems)