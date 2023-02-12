import { EntitySchema } from "typeorm";
import { Action, tutorialStatusEnum } from "../../../lib";

export const actionEntity = new EntitySchema<Action>({
  name: "Action",
  columns: {
    id: {
      type: Number,
      generated: true,
      primary: true,
    },
    tid: {
      type: Number
    },
    wid: {
      type: Number
    },
    date: {
      type: Date
    },
    pid: {
      type: Number
    },
    aid: {
      type: Number
    },
    count: {
      type: Number
    },
    status: {
      type: "simple-enum",
      enum: tutorialStatusEnum,
    },
  },
});
