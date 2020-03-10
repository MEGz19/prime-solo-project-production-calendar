import scheduleReducer from './scheduleReducer';

describe('testing scheduleReducer', () => {
    test('should set conflict', () => {
        let state = [];
        let action =  {type: 'SET_CONFLICT', payload: 'taco'};

        let returnedState = scheduleReducer(state, action);
        expect (returnedState).toEqual(action.payload);

    });
    test('should return state', () => {
        let state = [];
        let action =  {payload: 'taco'};

        let returnedState = scheduleReducer(state, action);
        expect (returnedState).toEqual(state);

    })
});