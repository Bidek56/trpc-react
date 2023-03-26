import { createContext } from "../src/trpc"
import { describe, beforeAll, expect, it } from "vitest";

import { appRouter } from '../index';
import { iTutorial } from "../../lib";

describe('tRpc tests', () => {
    it("test tutorial status", async () => {
      const req:any = "";
      const res:any = "";
      
      const ctx = createContext({ req, res });
      const caller = appRouter.createCaller(ctx);

      const tut: iTutorial[] = await caller.tutorial.list();
      // console.log("Ex:", tut);

      expect(tut).toBeDefined();
      expect(tut).not.toBeNull();
      expect(tut.length).toEqual(5);
    });
})