import { combineReducers } from 'redux';
import { authenticated, user } from './userReducer'
import { room } from './roomReducer';

const allReducers = {
    authenticated,
    user,
    room
}
const rootReducer = combineReducers(allReducers);

export default rootReducer;
