import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { launchesReducer } from './launchesReducer';

const rootReducer = combineReducers({
    eventsStore: eventsReducer,
    launchesStore: launchesReducer

});

export default rootReducer;
