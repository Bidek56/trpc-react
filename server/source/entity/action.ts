import { EntitySchema } from "typeorm";
import { iAction, tutorialStatusEnum } from "../../../lib";

export const Action = new EntitySchema<iAction>({
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
