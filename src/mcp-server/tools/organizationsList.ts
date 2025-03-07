/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsList } from "../../funcs/organizationsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetApiLeadScraperMicroserviceApiV1OrganizationRequest$inboundSchema,
};

export const tool$organizationsList: ToolDefinition<typeof args> = {
  name: "organizations_list",
  description: `List all organizations

Retrieves a list of all organizations in a tenant`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await organizationsList(
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
