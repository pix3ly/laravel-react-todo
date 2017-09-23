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
                <div className="column big">{this.props.description}</div>
                <div className="column">
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </li>
        )
    }
}
