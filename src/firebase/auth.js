import { auth, provider } from './firebase';

//Sign in
export const doSignInWithGithub = () => {
    const promise = auth.signInWithPopup(provider);
}