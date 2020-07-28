/**
 * An object that can authenticate a user and persist/maintain a user's authentication. Note that
 * this is important because if we use the Authenticator type, we can make a MockAuthenticator or
 * any other type of Authenticator that implements this interface. Then we can pass in any of those
 * implementing classes as our authenticators used in a variety of different settings, like the
 * signup and login forms.
 */
export interface Authenticator {
  login: (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) => void
  signup: (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) => void
}