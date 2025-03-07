/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsFetchById } from "../../funcs/accountsFetchById.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetApiLeadScraperMicroserviceApiV1AccountsIdRequest$inboundSchema,
};

export const tool$accountsFetchById: ToolDefinition<typeof args> = {
  name: "accounts_fetch-by-id",
  description: `Get account details

Retrieves details of a specific account`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsFetchById(
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
