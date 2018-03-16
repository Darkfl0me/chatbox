import { AUTH_USER, USER_PROFILE_LOADED, USER_PROFILE_LOADING, SIGN_OUT_USER } from "./types";
import { auth, provider } from '../firebase/firebase';
import axios from 'axios';
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

export function loginUser() {
    return dispatch => {
        auth.signInWithPopup(provider)
            .then((res) => {
                if(res) {
                    //dispatch(userProfileLoading(true));
                    console.log(res);
                    const user = {
                        githubId: res.user.providerData[0].uid,
                        displayName: res.additionalUserInfo.profile.name
                    }
                    //console.log(user);
                    axios.post('http://localhost:3001/users/', {
                        uid: res.user.providerData[0].uid,
                        displayName: res.additionalUserInfo.profile.name,
                        username: res.additionalUserInfo.username,
                        token: res.credential.accessToken
                    }).then((res) => {
                        console.log(res.data);
                        dispatch(userProfileLoaded(res.data));
                        dispatch(authenticated(true));
                    })
                }
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
                const userId = res.providerData[0].uid;
                axios.get('http://localhost:3001/users/' + userId)
                    .then((response) => {
                        if(response.status == 200) {
                            dispatch(userProfileLoaded(response.data));
                            dispatch(authenticated(true));
                        } else {
                            dispatch(logoutUser());
                        }
                    });
            } else {
                dispatch(logoutUser());
            }
        })
    }
}