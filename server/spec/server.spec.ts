import { createContext } from "../src/trpc"
import { describe, beforeAll, afterAll, expect, it } from "vitest";

import { connectDb, appRouter } from '../index';
import { iTutorial } from "../../lib";

describe('tRpc tests', () => {

    beforeAll( async () => {
      await connectDb();

      const req:any = "";
      const res:any = "";

      const ctx = createContext({ req, res });

      // @ts-expect-error type
      global.caller = appRouter.createCaller(ctx);
    })

    afterAll(() => {
      // @ts-expect-error type
      delete global.caller
    });

    it("test tutorial status", async () => {
      
      // @ts-expect-error type
      const tut: iTutorial[] = await global.caller.tutorial.list();
      // console.log("Ex:", tut);

      expect(tut).toBeDefined();
      expect(tut).not.toBeNull();
      expect(tut.length).toEqual(5);
    });
})