import React from 'react'
import axios from 'axios'

import Todos from './Todos'

export default class App extends React.Component {
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
        return (
            <div>
                <h1>Hello from React</h1>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}
