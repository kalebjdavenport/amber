/**
 * Stores information about a particular user. 
 */
export class User {
  private readonly uid: string;
  private readonly email: string | null;

  /**
   * Constructs a user with a given uid and email.
   * @param uid the unique identifier for this user.
   * @param email the email this user logs in with.
   */
  constructor(uid: string, email: string | null) {
    this.uid = uid;
    this.email = email;
  }
}