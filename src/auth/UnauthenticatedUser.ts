import { User } from "./User";

/**
 * The class that represents the behavior of an unauthenticated user. For instance, in the case that
 * a client requests a profile picture from the unauthenticated user, this UnauthenticatedUser might
 * return a url pointing to a default picture.
 * 
 * Note: at the moment, this class does nothing more than a normal User because a normal User has no
 * behavior. 
 */
export class UnauthenticatedUser extends User {
  constructor() {
    super("unauthenticated", null);
  }
}