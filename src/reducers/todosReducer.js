const todosReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO_ITEM':
            // Return all todo items, with the new item appended
            return [...state, action.todo]
        case 'REMOVE_TODO_ITEM':
            // Get the index of the todo item with the passed in id
            const idx = state.indexOf(action.todo.id)
            // Return all todo items, except for the item at idx
            return [...state.splice(0,idx), ...state.splice(idx+1) ]
        case 'MARK_TODO_ITEM_DONE':
            return []
        case 'MARK_TODO_ITEM_ARCHIVED':
            return []
        default: 
            return state
    }
}

export default todosReducer;