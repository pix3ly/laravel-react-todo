import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { addTodo } from '../actions'

import Todos from './Todos'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    onChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            axios.post('/api/todos', {
                description: this.state.input
            }).then(response => {
                const json = response.data

                this.props.addTodo(json.id, this.state.input)

                this.setState({
                    input: ''
                })
            })
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={this.onChange.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
                <Todos />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (id, description, completed) => {
            dispatch(addTodo(id, description, completed))
        }
    }
}

export default connect(null, mapDispatchToProps)(App)
