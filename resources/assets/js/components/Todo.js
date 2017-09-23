import React from 'react'

export default class Todo extends React.Component {
    render() {
        return (
            <li>
                <div className="column">
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="column">{this.props.description}</div>
            </li>
        )
    }
}
