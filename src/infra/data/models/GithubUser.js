/**
 * This Class is for Sequelize ORM table GITHUBUSER relation. The table and the Dataset object
 * is created from this file specification
 * @param {*} sequelize sequelize instance
 * @param {*} DataType DataType that is injected by Sequelize Configuration
 */
exports.default = function (sequelize, DataType) {
  var GithubUser = sequelize.define('GithubUser', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataType.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        isUnique: sequelize.validateIsUnique('login')
      }
    },
    name: {
      type: DataType.STRING
    },
    company: {
      type: DataType.STRING
    }

  },
    {
      freezeTableName: true,
      tableName: 'github-user'
    })
  return GithubUser
}
