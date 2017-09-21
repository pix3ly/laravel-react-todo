import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.description}</p>
                <input type="checkbox" checked={this.props.completed} />
            </li>
        )
    }
}
