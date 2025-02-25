/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspaceSharingsUpdate } from "../../funcs/workspaceSharingsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PutApiWorkspaceServiceV1WorkspaceSharingsRequestBody$inboundSchema,
};

export const tool$workspaceSharingsUpdate: ToolDefinition<typeof args> = {
  name: "workspace-sharings_update",
  description: `Update workspace sharing`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspaceSharingsUpdate(
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
