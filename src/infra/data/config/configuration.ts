import IDatabaseConfiguration from "./contracts/IDatabaseConfiguration";

/**
 * This file holds all the access configuration for the database
 * and to set the instance of the ORM Sequelize
 */
let databaseConfiguration: IDatabaseConfiguration = {
  database: 'lovelystay_test',
  username: "postgres",
  password: "admin",
  host: 'localhost',
  params: {
    port: 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

export default databaseConfiguration