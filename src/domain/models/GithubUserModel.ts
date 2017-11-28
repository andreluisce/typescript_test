/**
 * this is the anemic class that represents a User object. they are the same fields of the database table
 */
export default class GithubUserModel {
  id: number;
  login: string;
  name: string;
  avatarUrl: string;
  location: string;
  company: string;
};