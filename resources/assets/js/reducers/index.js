import { combineReducers } from 'redux'

const todos = (state = [], payload) => {
    switch (payload.type) {
        case 'ADD_TODO':
            return [...state, {
                id: payload.id,
                description: payload.description,
                completed: payload.completed
            }]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, completed: !todo.completed }
                }

                return todo
            })

        default:
            return state
    }
}

const THING = combineReducers({
    todos
})

export default THING
