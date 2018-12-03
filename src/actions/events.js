import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getEventsStart(){
    return{
        type: constants.EVENTS_GET_START,
    }
}

export function getEventsSuccess(data){
    return{
        type: constants.EVENTS_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getEventsError(error){
    return{
        type: constants.EVENTS_GET_ERROR,
        payload: {
            error
        }
    }
}


export function getEvents(launchesNumber){

    return (dispatch) => {
        dispatch(getEventsStart());
        fetch('https://api.spacexdata.com/v3/launches/past')
        .then(response => response.json())
        .then(data => dispatch(getEventsSuccess(
            data
        )))
        .catch(error => dispatch(getEventsError(
            error: true
        )));
    };
}
