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

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo description={todo.description} completed={todo.completed} />
        })

        return (
            <ul>
                {todos}
            </ul>
        )
    }
}
