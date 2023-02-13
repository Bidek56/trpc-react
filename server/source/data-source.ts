import { DataSource } from "typeorm";
import { tutorialEntity } from "./entity/tutorials";
import { actionEntity } from "./entity/action";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  

  entities: [tutorialEntity, actionEntity],
  //only used for development
  synchronize: true,
  dropSchema: true,

  logging: true,
});
