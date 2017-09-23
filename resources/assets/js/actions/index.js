export const addTodo = (id, description, completed = false) => {
    return {
        type: 'ADD_TODO',
        id,
        description,
        completed
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}
