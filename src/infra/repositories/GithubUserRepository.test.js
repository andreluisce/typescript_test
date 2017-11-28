/* global describe, it, expect */
const GithubUserRepository = require('./GithubUserRepository').default

describe('Testing User Repository', () => {
  it('should consult the database and return a list of users', () => {
    const githubUserRepository = new GithubUserRepository()
    githubUserRepository.listAll().then(res => {
      expect(res).toBeDefined()
    })
  })
})
