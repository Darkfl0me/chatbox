import { ADD_ROOM } from '../Actions/types';
import { concat } from 'lodash'

export function room(state=[], action) {
    switch(action.type) {
        case ADD_ROOM: {
            const rooms = concat(state, action.payload);
            return rooms;
        }
        default: return state 
    }
}