import { createContext } from "../src/trpc"
import { describe, beforeAll, afterAll, expect, it } from "vitest";

import { connectDb, appRouter } from '../index';

import { Tutorial } from "../src/db/factory/tutorial.entity"
import { Time } from "../src/db/factory/time.entity"
import { Action } from "../src/db/factory/action.entity"


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


    it("test action list", async () => {
      // @ts-expect-error type
      const act: Action[] = await global.caller.action.list();
      // console.log("Ex:", tut);

      expect(act).toBeDefined();
      expect(act).not.toBeNull();
      expect(act.length).toEqual(5);
    });

    it("test tutorial list", async () => {
      // @ts-expect-error type
      const tut: Tutorial[] = await global.caller.tutorial.list();
      // console.log("Ex:", tut);

      expect(tut).toBeDefined();
      expect(tut).not.toBeNull();
      expect(tut.length).toEqual(5);
    });

    it("test tutorial status", async () => {
      // @ts-expect-error type
      const st: Tutorial[] = await global.caller.tutorial.getByStatus({status: "tutorial"});
      // console.log("St:", st);

      expect(st).toBeDefined();
      expect(st).not.toBeNull();
      expect(st.length).toEqual(5);
    });

    it("test time list", async () => {
      // @ts-expect-error type
      const tm: Time[] = await global.caller.time.list();
      // console.log("Ex:", tm);

      expect(tm).toBeDefined();
      expect(tm).not.toBeNull();
      expect(tm.length).toEqual(5);
    });
})