import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions/actions'

class TodoForm extends Component {

    state = {
        todoTextLocal: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem({
            todoText: this.state.todoTextLocal,
            completed: false,
            archived: false,
            id: uuid(),
        })
    }

    render() {
        return (
            <div>
                <form name="todoForm" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="todoText"
                        placeholder="Add a todo."
                    />
                    <button name="submitTodo" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodoItem })(TodoForm);