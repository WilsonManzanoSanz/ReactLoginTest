import firebase from '../database/firebase';
import store from '../redux/store';
import { addUser, removeUser } from "../redux/actions/actions";

class AuthService {
    constructor() {
        console.log('Auth service init');
        this.attemptLogin = this.attemptLogin.bind(this);
        this.signOut = this.signOut.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.getCurrentUser();
    }


    getCurrentUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.saveUser(user);
            } else {
                // No user is signed in.
            }
        });
    }

    attemptLogin(email = 'a@a.com', password = 'xxxxxxxx') {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signOut() {
        return new Promise((resolve, reject) => {
            return firebase.auth().signOut().then(response => {
                localStorage.removeItem(`loggedUser`);
                store.dispatch(removeUser());
                resolve();
            }).catch(error => {
                reject(error);
                console.error(error);
            });
        })

    }

    saveUser(user) {
        const loggedUser = (({ displayName, email, uid, photoURL }) => ({ displayName, email, uid, photoURL }))(user);
        store.dispatch(addUser(loggedUser));
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    }
}
const authService = new AuthService();
export { authService };