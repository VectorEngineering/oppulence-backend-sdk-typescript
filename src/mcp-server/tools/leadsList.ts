/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leadsList } from "../../funcs/leadsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetApiLeadScraperMicroserviceApiV1LeadsRequest$inboundSchema,
};

export const tool$leadsList: ToolDefinition<typeof args> = {
  name: "leads_list",
  description: `List leads

Retrieves a paginated list of leads with comprehensive filtering options`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await leadsList(
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
