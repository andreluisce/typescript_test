import GithubUserModel from './domain/models/GithubUserModel';
import GithubUserService from './business/GithubUserService';
import chalk from 'chalk'


let userArgs
if (process.argv.indexOf('--username')) {
  userArgs = process.argv[process.argv.indexOf('--username') + 1]
}
else {
  console.log(chalk.bgKeyword('red')('Invalid Username!'))
  process.exit(0)
}

const userService = new GithubUserService()
const user = new GithubUserModel()

userService.createByUsername(userArgs.trim())
  .then(r => console.info(r))
  .catch(e => console.error("Error: ", e.message))