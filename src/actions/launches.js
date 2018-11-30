import * as constants from '../constants';
import fetch from 'isomorphic-fetch';


export function getLaunchesStart(){
    return{
        type: constants.LAUNCHES_GET_START,
    }
}

export function getLaunchesSuccess(data){
    return{
        type: constants.LAUNCHES_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getLaunchesError(error){
    return{
        type: constants.LAUNCHES_GET_ERROR,
        payload: {
            error
        }
    }
}


export function getLanuches(launchesNumber){
    return (dispatch) => {
        dispatch(getLaunchesStart());
        fetch('https://api.spacexdata.com/v3/launches/' + launchesNumber)
        .then(response => response.json())
        .then(data => dispatch(getLaunchesSuccess(
            data
        )))
        .catch(error => dispatch(getLaunchesError(
            error: true
        )));
    };
}
