const adminReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALL_CONFLICTS':
            return action.payload;
        default:
            return state;
    }
}

export default adminReducer;
