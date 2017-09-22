import React from 'react'
import axios from 'axios'

import Todos from './Todos'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            todo: ''
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

    handleChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            axios.post('/api/todos', {
                description: this.state.todo
            })

            this.setState({
                todo: ''
            })
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.todo}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                />
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}
