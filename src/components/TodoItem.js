import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoItem, removeTodoItem, markTodoItemDone, markTodoItemArchived } from '../actions/actions'


class TodoItem extends Component {

    state = {
        completed: false,
    }

    handleCheck = (e) => {
        this.setState({
            completed: !this.state.completed,
        });
        
    }

    generateList = () => {
        this.props.todos.map( todo => (
            <li key={this.props.todo.id}>
                <input
                    name={"markDone-" + this.props.todo.id}
                    onChange={this.handleCheck}
                    type="checkbox"
                />
                <span>{this.props.todo.todoText}</span>
                <button name={"remove-" + this.props.todo.id}>Remove</button>
                <button name={"archive-" + this.props.todo.id}>Archive</button>
            </li>
        ))
    }

    render() {
        return (
            <div>
                {this.generateList()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(
    mapStateToProps, 
    { addTodoItem, removeTodoItem, markTodoItemDone, markTodoItemArchived }
)(TodoItem);
