import Firebase from "./Firebase";
import { User } from "./User";
import { store } from "../redux/store";
import { persistUser } from "../redux/actionCreators";
import { UnauthenticatedUser } from "./UnauthenticatedUser";
import { Authenticator } from "./Authenticator";

/**
 * This class is the default form of authentication for the Amber front-end. This class abstracts 
 * authentication including sign in/out, creating a new user, and more. This is for the sake of 
 * being able to easily switch authentication libraries if necessary (i.e. Firebase login -> 
 * Custom solution)
 */
class Authentication implements Authenticator {
  private static readonly instance: Authentication = new Authentication();
  private readonly firebase: Firebase;

  /**
   * Initializes the specific version of authentication this class will use to authenticate and
   * deauthenticate users.
   */
  private constructor() {
    const onUserAuthenticated = (user: User): void => {
      store.dispatch(persistUser(user));
    }

    const onUserDeauthenticated = () : void => {
      store.dispatch(persistUser(new UnauthenticatedUser()));
    }

    Firebase.initialize(onUserAuthenticated, onUserDeauthenticated);
    this.firebase = Firebase.getInstance();
  }

  /**
   * Provides the single instance of this class. This is also known as the singleton pattern.
   */
  static getInstance() {
    return this.instance;
  }

  /**
   * Logs a user in with the given email and password.
   * @param password the unhashed/unsalted password of the user trying to login. This **will not
   * ever** be stored.
   * @param email the username of the user trying to login.
   * @param onError the callback called when something goes wrong
   * @param onSucces the callback called after a successful login
   */
  login(password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) {
    this.firebase.login(password, email, onError, onSuccess);
  }

  /**
   * Signs a user in with the given email and password.
   * @param password the unhashed/unsalted password of the user trying to login. This **will not
   * ever** be stored.
   * @param email the username of the user trying to login.
   * @param onError the callback called when something goes wrong
   * @param onSucces the callback called after a successful signup
   */
  signup(password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) {
    this.firebase.signup(password, email, onError, onSuccess);
  }
}

export default Authentication;