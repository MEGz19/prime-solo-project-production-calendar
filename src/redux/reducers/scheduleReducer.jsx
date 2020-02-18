const scheduleReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CONFLICT':
            return action.payload;
        default:
            return state;
    }
}

//This reducer will place the array of conflicts in redux.

export default scheduleReducer;