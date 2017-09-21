import React from 'react'
import axios from 'axios'

import Todo from './Todo'

export default class Todos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.fetchTodos()
    }

    fetchTodos() {
        axios.get('/api/todos')
            .then(response => {
                const json = response.data

                this.setState({
                    todos: json
                })
            })
    }

    toggle(todo) {
        let todosCopy = this.state.todos

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
        const todos = this.state.todos.map(todo => {
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
