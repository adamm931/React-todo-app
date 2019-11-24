import React from 'react';
import './AddTodo.css'
import { connect } from 'react-redux'
import * as actions from '../../actions/actionsFactory';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.input = '';
    }

    addItem = (event) => {

        event.preventDefault();

        if (this.input.value === '') {
            return;
        }

        this.props.addTodo(this.input.value);

        this.input.value = '';
    }

    render() {
        return (<div className="add-todo-conainer">
            <form onSubmit={this.addItem}>
                <input
                    className="add-todo-input"
                    type="text"
                    placeholder="Task name"
                    ref={value => this.input = value}
                />
                <button
                    type="submit"
                    className="add-todo-btn">
                    Add todo
                </button>
            </form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(actions.addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)