import { AppDataSource } from "../data-source";
import { tutorialEntity } from "../entity/tutorials";
import { actionEntity } from "../entity/action";
import { t } from "../trpc";
import { z } from "zod";
import { tutorialStatusEnum } from "../../../lib";

const tutorialRepository = AppDataSource.getRepository(tutorialEntity);
const actionRepository = AppDataSource.getRepository(actionEntity);

const createSchema = z.object({
  youtubeUrl: z.string(),
  title: z.string(),
  progress: z.number(),
  status: z.enum(tutorialStatusEnum),
});

const patchSchema = z.object({
  id: z.number(),
  progress: z.number().optional(),
  status: z.enum(tutorialStatusEnum).optional(),
});

export const tutorialRouter = t.router({
  list: t.procedure.query(() => {
    return tutorialRepository.find();
  }),
  getByStatus: t.procedure
    .input(
      z.object({
        status: z.enum(tutorialStatusEnum),
      })
    )
    .query((req) => {
      return tutorialRepository.find({
        where: {
          status: req.input.status,
        },
      });
    }),
  create: t.procedure.input(createSchema).mutation((req) => {
    req.input;
    return tutorialRepository.save(req.input);
  }),
  patch: t.procedure.input(patchSchema).mutation((req) => {
    const { id, ...rest } = req.input;
    return tutorialRepository.update(id, rest);
  }),
  delete: t.procedure.input(z.object({ id: z.number() })).mutation((req) => {
    return tutorialRepository.delete(req.input.id);
  }),
});


export const actionRouter = t.router({
  list: t.procedure.query(() => {
    return actionRepository.find();
  }),
});
