/**
 * An object that can authenticate a user and persist/maintain a user's authentication.
 */
export interface Authenticator {
  login: (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) => void
  signup: (password: string, email: string, onError: VoidFunction, onSuccess: VoidFunction) => void
}