import {} from './types';

export function addRoom(roomData) {
    return {
        type: ADD_ROOM,
        payload: roomData
    }
}

