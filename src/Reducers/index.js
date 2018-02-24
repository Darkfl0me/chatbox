import { combineReducers } from 'redux';
import { authenticated, user } from './userReducer'

const allReducers = {
    authenticated,
    user
}
const rootReducer = combineReducers(allReducers);

export default rootReducer;
