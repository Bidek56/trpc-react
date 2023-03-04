import { DataSource } from "typeorm";
import { tutorialEntity } from "./entity/tutorials";
import { Action } from "./entity/action";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  

  entities: [tutorialEntity, Action],
  //only used for development
  synchronize: true,
  dropSchema: true,

  logging: true,
});
