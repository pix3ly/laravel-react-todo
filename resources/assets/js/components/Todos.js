import React from 'react'
import axios from 'axios'

import Todo from './Todo'

export default class Todos extends React.Component {
    toggle(todo) {
        let todosCopy = this.props.todos

        for (const key in todosCopy) {
            const todoCopy = todosCopy[key]

            if (todoCopy === todo) {
                todoCopy.completed = !todoCopy.completed

                axios.put('/api/todos/' + todoCopy.id, {
                    completed: todoCopy.completed
                })
            }
        }

        this.setState({
            todos: todosCopy
        })
    }

    render() {
        const todos = this.props.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    description={todo.description}
                    completed={todo.completed}
                    onToggle={this.toggle.bind(this, todo)}
                />
            )
        })

        return (
            <ul>
                {todos}
            </ul>
        )
    }
}
