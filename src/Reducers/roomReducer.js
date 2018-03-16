import { ADD_ROOM } from '../Actions/types';
import { concat } from 'lodash'

export function room(state={}, action) {
    switch(action.type) {
        case ADD_ROOM: {
            return action.payload;
        }
        default: return state 
    }
}