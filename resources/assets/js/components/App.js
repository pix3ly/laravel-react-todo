import React from 'react'

import Todos from './Todos'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from React</h1>
                <Todos />
            </div>
        )
    }
}
