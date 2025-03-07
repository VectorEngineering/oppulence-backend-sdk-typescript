/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountsRegister } from "../../funcs/accountsRegister.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PostApiLeadScraperMicroserviceApiV1AccountsRequestBody$inboundSchema,
};

export const tool$accountsRegister: ToolDefinition<typeof args> = {
  name: "accounts_register",
  description: `Create a new account

Creates a new user account in the workspace service`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accountsRegister(
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
