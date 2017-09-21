import React from 'react'

import Todo from './Todo'

export default class Todos extends React.Component {
    render() {
        const todos = this.props.todos.map(todo => {
            return <Todo description={todo.description} completed={todo.completed} />
        })

        return (
            <ul>
                {todos}
            </ul>
        )
    }
}
