import IDatabaseConfiguration from './IDatabaseConfiguration';
import { Sequelize, SequelizeStatic } from "sequelize";

export default interface IDataSource {
  sequelize: Sequelize;
  Sequelize: SequelizeStatic;
  models: any
}