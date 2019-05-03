import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions/actions'

class TodoForm extends Component {

    state = {
        todoTextLocal: "",
    }

    handleChange = (e) => {
        console.log("handleChange fired.")
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log("New state is: ", this.state)
    }

    handleSubmit = (e) => {
        console.log("handleSubmit fired. Local state is: ", this.state)
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
                        name="todoTextLocal"
                        placeholder="Add a todo."
                        title="Add a todo."
                        value={this.state.todoTextLocal}
                    />
                    <button name="todoSubmit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoItem: formData => dispatch(addTodoItem(formData)),
    };
};

export default connect(null, mapDispatchToProps)(TodoForm);