import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={this.props.onChange}
                    />
                </td>
                <td>{this.props.description}</td>
            </tr>
        )
    }
}
