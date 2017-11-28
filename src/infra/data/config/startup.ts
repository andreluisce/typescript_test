/**
 * This file is the file for configurating the datasource.
 * It is where the connection with the database is done, and
 * also where the models (Datasets) are exposed to be used by other classes
 */
import IStartup from './contracts/IStartup';
import IDatabaseConfiguration from './contracts/IDatabaseConfiguration';
import IDataSource from './contracts/IDataSource';

import Sequelize from 'sequelize'
import * as fs from 'fs';
import * as path from 'path';
import config from '../config/configuration'

export default class Startup implements IStartup {
  database: IDataSource = null
  private static _instance: Startup
  public static getInstance(): Startup {
    return Startup._instance || (Startup._instance = new Startup(config));
  };
  constructor(private config: IDatabaseConfiguration) {
    this.startup(config)
  }

  /**
   * This is a helper function that loads all the models to the database object
   * Then it returns a list of all models objects to be accessed as a Dataset
   * @param sequelize instance of Sequelize
   */
  private loadModels = (sequelize): Array<any> => {
    const dir = path.resolve(`${__dirname}/../models`)
    const models = []
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file)
      const model = sequelize.import(modelDir)
      models[model.name] = model
    })
    return models
  }

  /**
 * this exported method is the core object to manipulate the data using Sequelize
 * @param config The configuration of the database
 */
  private startup = async (config) => {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )

    this.database = {
      sequelize,
      Sequelize,
      models: []
    }

    this.database.models = this.loadModels(sequelize)

    //Syncronizing the database, it is like as an open connection
    await sequelize.sync({ logging: false })
  }
}