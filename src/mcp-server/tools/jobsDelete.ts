/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsDelete } from "../../funcs/jobsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .DeleteApiLeadScraperMicroserviceApiV1JobsJobIdRequest$inboundSchema,
};

export const tool$jobsDelete: ToolDefinition<typeof args> = {
  name: "jobs_delete",
  description: `Delete a specific job

This endpoint deletes a specific Google Maps scraping job`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsDelete(
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
