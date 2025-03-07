/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsGetAll } from "../../funcs/jobsGetAll.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetApiLeadScraperMicroserviceApiV1JobsRequest$inboundSchema,
};

export const tool$jobsGetAll: ToolDefinition<typeof args> = {
  name: "jobs_get-all",
  description: `Get all jobs

This endpoint retrieves all Google Maps scraping jobs`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsGetAll(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
