import { USER_PROFILE_LOADED, USER_PROFILE_LOADING, AUTH_USER, SIGN_OUT_USER } from "../Actions/types";
/*
const initialState = {
    user: null,
    auth_user: false,
    user_profile_loading: true
}
*/
export function authenticated(state='false', action) {
    switch(action.type) {
        case AUTH_USER: 
            return  action.payload        
        default: return state;
    }
}
/*
export function userProfileLoading(state={}, action) {
    switch(action.type) {
        case USER_PROFILE_LOADING: {
            return {...state,
                 user_profile_loading: action.payload
            }
        }
        default: return state;
    }
    
}
*/
export function user(state={}, action) {
    switch(action.type) {
        case USER_PROFILE_LOADED: {
            return {...state, user: action.payload}
        }
        default: return state;
    }
}