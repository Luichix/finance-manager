import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from 'src/entity';
import { config } from 'dotenv';
config();
// let config = {
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'nest',
// };

const DATABASE_URL = process.env.DATABASE_URL;
const options: SequelizeOptions = { logging: false };

const useFactory = async () => {
  const sequelize = new Sequelize(DATABASE_URL, options);
  sequelize.addModels([User]);
  await sequelize.sync();
  return sequelize;
};

export const databaseProviders = [{ provide: 'SEQUELIZE', useFactory }];
