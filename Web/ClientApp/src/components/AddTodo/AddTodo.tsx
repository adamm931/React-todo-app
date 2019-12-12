import React from 'react';
import './AddTodo.css'
import { connect } from 'react-redux'
import { IAddTodoDispatch } from './States/IAddTodoDispatch';
import { IAddTodoState } from './States/IAddTodoState';
import { RequestCreator } from '../../actions/creator/RequestCreator';

class AddTodo extends React.Component<IAddTodoDispatch, IAddTodoState> {
    constructor(props: any) {
        super(props)

        this.state = {
            Input: ''
        }
    }

    addItem = (event: any) => {

        event.preventDefault();

        if (this.state.Input === '') {
            return;
        }

        this.props.AddTodo(this.state.Input);

        this.setState({
            Input: ''
        });
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        this.setState({
            Input: event.target.value
        });
    }

    render() {
        return (<div className="add-todo-conainer">
            <form onSubmit={this.addItem}>
                <input
                    className="add-todo-input"
                    type="text"
                    placeholder="Task name"
                    value={this.state.Input}
                    onChange={this.onChange}
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

const mapDispatchToProps = (dispatch: any):IAddTodoDispatch => ({
    AddTodo: (name: string) => dispatch(RequestCreator.AddTodo(name))
})

export default connect(null, mapDispatchToProps)(AddTodo)