import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.description}</p>
                <p>{this.props.completed}</p>
            </li>
        )
    }
}
