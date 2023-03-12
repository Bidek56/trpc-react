import { type inferProcedureInput } from "@trpc/server";
import { createContext } from "../source/trpc"
import { appRouter, type AppRouter } from '../index';
import * as dotenv from 'dotenv'

import { describe, beforeAll, expect, it } from "vitest";
import { Tutorial } from "../../lib";

describe('tRpc tests', () => {

    beforeAll(async () => {
      dotenv.config()
    })

    it("test tutorial status", async () => {
        const req:any = "";
        const res:any = "";
        
        const ctx = createContext({ req, res });
        const caller = appRouter.createCaller(ctx);

        const tenantId = process.env.TENANT_ID || "1";
        const workspaceId = parseInt( process.env.WORKSPACE_ID ?? "1" );

        type Input = inferProcedureInput<AppRouter["tutorial"]["getByStatus"]>;
        const input: Input = {
            status: "bar"
        };

        const tut: Tutorial[] = await caller.tutorial.getByStatus(input);
        // console.log("Ex:", tut);

        expect(tut).toBeDefined();
        expect(tut).not.toBeNull();
    });

})