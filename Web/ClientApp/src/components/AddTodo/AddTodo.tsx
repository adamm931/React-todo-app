import React, { Component, ChangeEvent } from 'react';
import './AddTodo.css'
import { connect } from 'react-redux'
import { IAddTodoDispatch } from './States/IAddTodoDispatch';
import { IAddTodoProps } from './States/IAddTodoProps';
import { AddTodoState } from './States/AddTodoState';
import { ActionCreator } from '../../actions/ActionCreator';

type IAddTodoComponentProps = IAddTodoProps & IAddTodoDispatch;

class AddTodo extends Component<IAddTodoComponentProps, AddTodoState> {

    constructor(props: IAddTodoComponentProps) {
        super(props)

        this.state = new AddTodoState();
    }

    addItem = (event: any) => {

        event.preventDefault();

        if (this.state.IsEmpty) {
            return;
        }

        this.props.AddTodo(this.state.Input);
        this.state.Clear();
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.state.SetInput(event.target.value);
    }

    render() {

        console.log(this.state);

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
    AddTodo: (text: string) => dispatch(ActionCreator.RequestAddTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)