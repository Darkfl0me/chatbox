import { AUTH_USER, USER_PROFILE_LOADED, USER_PROFILE_LOADING, SIGN_OUT_USER } from "./types";
import { auth, provider } from '../firebase/firebase';
//import { authenticated } from "../Reducers/userReducer";

export function authenticated(bool) {
    return {
        type: AUTH_USER,
        payload: bool
    }
}

export function userProfileLoading(bool) {
    return {
        type: USER_PROFILE_LOADING,
        payload: bool
    }
}

export function userProfileLoaded(user) {
    return {
        type: USER_PROFILE_LOADED,
        payload: user
    }
}

function createUser(user) {
    return fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(user)
    }).then(res => res);
}

function getUser() {
    return fetch('http://localhost:3001/user').then(res => res);
}

export const loadUser = (userId) => {
    return dispatch => {
        dispatch(userProfileLoading(true));
        const url = 'http:///localhost:3001/users/' + userId; 
        fetch(url)
            .then((user) => {
                dispatch(userProfileLoaded(user));
                dispatch(authenticated(true));
            });
    }
}

export function loginUser() {
    return dispatch => {
        auth.signInWithPopup(provider)
            .then((res) => {
                if(res) {
                    //dispatch(userProfileLoading(true));
                    console.log(res);
                    const user = {
                        githubId: res.uid,
                        displayName: res.additionalUserInfo.profile.name
                    }
                    return fetch('http://localhost:3001/user', {
                        method: 'POST',
                        headers: new Headers(),
                        body: JSON.stringify(user)
                    })
                }
            }).then((res) => {
                dispatch(authenticated(true));
                dispatch(userProfileLoaded(res));
                //dispatch(userProfileLoading(false));
            });
    }
}

export const logoutUser = () => {
    return dispatch => {
        auth.signOut()
            .then(() => {
                console.log('logout');
                dispatch(authenticated(false));
            })
    }
}

export function verifyAuth() {
    return dispatch => {
        auth.onAuthStateChanged((res) => {
            if(res) {
                //console.log(user);
                //dispatch(authorizeUser(true));
                const userId = res.providerData[0].uid;
                const url = 'http://localhost:3001/users/' + userId;
                fetch(url)
                    .then((res) => {
                        //console.log(res);
                        //dispatch(userProfileLoaded(user));
                        return res.json();
                        
                    }).then((user) => {
                        //dispatch(userProfileLoaded(user));
                        dispatch(authenticated(true));
                    })
                            
                //dispatch(loadUser(userId))
            } else {
                dispatch(logoutUser());
            }
        })
    }
}