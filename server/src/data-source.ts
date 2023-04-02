import { Action } from "../src/db/factory/action.entity"
import { Tutorial } from "../src/db/factory/tutorial.entity"
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './db/seeds/MainSeeder'

const dbOptions: DataSourceOptions & SeederOptions = {
  type: "better-sqlite3",
  database: "database.sqlite",

  // entities: [`${__dirname}/db/factory/*.entity.ts`],
  entities: [Tutorial, Action],
  factories: [`${__dirname}/src/db/factory/**/*.factory.ts`],
  seeds: [MainSeeder],

  // only used for development
  // synchronize: true,
  // dropSchema: true,
  logging: true,
}

export const AppDataSource = new DataSource(dbOptions);