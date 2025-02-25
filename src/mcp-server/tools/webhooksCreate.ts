/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../../funcs/webhooksCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$inboundSchema,
};

export const tool$webhooksCreate: ToolDefinition<typeof args> = {
  name: "webhooks_create",
  description: `Create webhook

Creates a new webhook configuration for event notifications`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhooksCreate(
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
