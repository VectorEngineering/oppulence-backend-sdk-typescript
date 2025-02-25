/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tenantApiKeysUpdate } from "../../funcs/tenantApiKeysUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PutApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysRequestBody$inboundSchema,
};

export const tool$tenantApiKeysUpdate: ToolDefinition<typeof args> = {
  name: "tenant-api-keys_update",
  description: `Update tenant API key

Updates an existing tenant API key&#x27;s configuration`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tenantApiKeysUpdate(
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
