import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { addTodo, toggleTodo } from '../actions'

import Todo from './Todo'

class Todos extends React.Component {
    componentDidMount() {
        this.fetchTodos()
    }

    fetchTodos() {
        axios.get('/api/todos')
            .then(response => {
                const json = response.data

                for (const key in json) {
                    const todo = json[key]

                    this.props.addTodo(todo.id, todo.description, todo.completed)
                }
            })
    }

    toggleTodo(todo) {
        axios.put('/api/todos/' + todo.id, {
            completed: !todo.completed
        }).then(response => {
            this.props.toggleTodo(todo.id)
        })
    }

    render() {
        const todos = this.props.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    description={todo.description}
                    completed={todo.completed}
                    onChange={this.toggleTodo.bind(this, todo)}
                />
            )
        })

        return (
            <table>
                <tbody>
                    {todos}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (id, description, completed) => {
            dispatch(addTodo(id, description, completed))
        },
        toggleTodo: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
