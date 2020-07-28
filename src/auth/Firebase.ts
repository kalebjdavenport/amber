import app from 'firebase';
import { User } from './User';
 
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

/**
 * Stores information about the Firebase implementation of authentication. `Firebase#initialize`
 * MUST be called before doing anything with the Firebase class in order to initialize the singleton
 * instance of the class. Otherwise, Firebase will throw an exception.
 */
class Firebase {
  private static instance : Firebase;
  private readonly auth: app.auth.Auth;

  /**
   * Initializes the field of
   * this class that holds the singleton instance of Firebase.
   * @param onUserAuthenticated 
   * @param onUserDeauthenticated 
   */
  private constructor(onUserAuthenticated: (user: User) => void, 
                      onUserDeauthenticated: VoidFunction) {
    Firebase.instance = this;

    app.initializeApp(config);
    app.analytics();
    this.auth = app.auth();

    app.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const email = user.email;
        const uid = user.uid;
        
        onUserAuthenticated(new User(uid, email));
      } else {
        // User is signed out.
        onUserDeauthenticated();
      }
    });
  }

  /**
   * Initializes this Firebase singleton if it doesn't already exist. Returns true if successful;
   * false if this Firebase singleton has already been initialized.
   * @param onUserAuthenticated 
   * @param onUserDeauthenticated 
   */
  static initialize(onUserAuthenticated: (user: User) => void, 
                    onUserDeauthenticated: VoidFunction): boolean {
    if (Firebase.instance === undefined) {
      new Firebase(onUserAuthenticated, onUserDeauthenticated);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Provides the single instance of this class. This is also known as the singleton pattern. Throws
   * an error if `Firebase#initialize` has not been called
   */
  static getInstance(): Firebase | never {
    if (this.instance === undefined) {
      throw new Error("Firebase#initialize *must* be called before any other action on the " +
                      "Firebase class");
    }
    return this.instance;
  }

  /**
   * Logs a user into the Firebase auth service with the given email and password.
   * @param password the unhashed/unsalted password of the user trying to login. This **will not
   * ever** be stored.
   * @param email the username of the user trying to login.
   * @param onError the callback for when something goes wrong with authentication
   * @param onSuccess the callback for when the authentication successfully completes
   */
  login(password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction): void {
    this.auth.signInWithEmailAndPassword(email, password)
             .then((val: app.auth.UserCredential) => onSuccess())
             .catch(onError);
  }

  /**
   * Signs a user into the Firebase auth service with the given email and password.
   * @param password the unhashed/unsalted password of the user trying to login. This **will not
   * ever** be stored.
   * @param email the username of the user trying to login.
   * @param onError the callback for when something goes wrong with authentication
   * @param onSuccess the callback for when the authentication successfully completes
   */
  signup(password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction): void {
    this.auth.createUserWithEmailAndPassword(email, password)
             .then((val: app.auth.UserCredential) => onSuccess())
             .catch(onError);
  }
}
 
export default Firebase;