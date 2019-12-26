const initialState = {
    users: []
}

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return {
                
            }
        default:
            return state
    }
}
