/**
 * This is the class which has the business logic to filter and manipulate
 * the data to access the database
 */
import GithubUserRepository from '../infra/repositories/GithubUserRepository';
import GithubUserModel from '../domain/models/GithubUserModel';
import request from 'request-promise'
export default class GithubUserService {

  githubUserRepository = new GithubUserRepository()

  createByUsername = async (username): Promise<any> => {
    let userRequested
    try {
      userRequested = await request({
        uri: `https://api.github.com/users/${username}`,
        headers: { 'User-Agent': 'Request-Promise' },
        json: true
      })
    } catch (error) {
      error["type"] = "Github error"
      return Promise.reject(error)
    }

    let user = new GithubUserModel();
    user.avatarUrl = userRequested.avatar_url
    user.company = userRequested.company
    user.location = userRequested.location
    user.login = userRequested.login
    try {
      const userRepoResponse = await this.githubUserRepository.create(user)
      return Promise.resolve(userRepoResponse)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  listAll = () => {
    return this.githubUserRepository.listAll().then(res => Promise.resolve(res.dataValues))
  }
}