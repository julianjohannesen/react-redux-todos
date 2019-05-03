import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoItem extends Component {

    state = {
        archived: false,
        completed: false,
    }

    handleLocal = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name],
        });
        
    }

    generateList = () => {
        this.props.todos.map( todo => (
            <li key={todo.id}>
                <input
                    name={"markDone-" + todo.id}
                    onChange={this.handleLocal}
                    type="checkbox"
                    value={this.state.completed}
                />
                <span>
                    {todo.todoText}
                </span>
                <button 
                    name={"remove-" + todo.id} 
                    onClick={this.handleLocal}
                >
                    Remove
                </button>
                <button 
                    name={"archive-" + todo.id}
                    onClick={this.handleLocal}
                >
                    Archive
                </button>
            </li>
        ))
    }

    render() {
        return (
            <div>
                {this.props.todos ? this.generateList() : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoItem);
