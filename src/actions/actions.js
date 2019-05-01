export const addTodoItem = (todo) => {
    return {
        type: 'ADD_TODO_ITEM',
        todo
    }
}

export const removeTodoItem = (id) => {
    return {
        type: 'REMOVE_TODO_ITEM',
        id
    }
}

export const markTodoItemDone = (id) => {
    return {
        type: 'MARK_TODO_ITEM_DONE',
        id
    }
}

export const markTodoItemArchived = (id) => {
    return {
        type: 'MARK_TODO_ITEM_ARCHIVED',
        id
    }
}