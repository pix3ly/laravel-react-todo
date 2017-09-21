import React from 'react'

import Todos from './Todos'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    description: 'Test',
                    completed: 0
                },
                {
                    description: 'Test',
                    completed: 0
                }
            ]
        }
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
