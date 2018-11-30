import * as constants from '../constants';

const initialState = {
    data: null,
    error: false,
    isError: false,
    isLoading: true
};

export function launchesReducer(state = initialState, action){
    switch (action.type) {
        case constants.LAUNCHES_GET_START:
            return {...state, isLoading: true};
        case constants.LAUNCHES_GET_SUCCESS:
            return {...initialState, data: action.payload.data, isLoading: false};
        case constants.LAUNCHES_GET_ERROR:
            return {...state, isLoading: false, isError: true, error: action.payload.error};
        default:
            return state;

    }
}
