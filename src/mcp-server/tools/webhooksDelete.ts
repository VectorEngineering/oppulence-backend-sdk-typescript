/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksDelete } from "../../funcs/webhooksDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .DeleteApiLeadScraperMicroserviceApiV1WebhooksWebhookIdRequest$inboundSchema,
};

export const tool$webhooksDelete: ToolDefinition<typeof args> = {
  name: "webhooks_delete",
  description: `Delete webhook

Deletes a webhook configuration`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await webhooksDelete(
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
