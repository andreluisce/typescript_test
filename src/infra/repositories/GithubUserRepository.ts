import Startup from '../data/config/startup';
import GithubUserModel from '../../domain/models/GithubUserModel';


export default class GithubUserRepository {
  githubUserDataSet: any
  constructor() {
    this.githubUserDataSet = Startup.getInstance().database.models.GithubUser
  }

  create = (user: GithubUserModel) => {
    return this.githubUserDataSet.create(user)
  }

  listAll = () => {
    return this.githubUserDataSet.findAll({})
  }
}