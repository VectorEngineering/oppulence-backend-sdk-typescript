/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesShare } from "../../funcs/workspacesShare.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareRequest$inboundSchema,
};

export const tool$workspacesShare: ToolDefinition<typeof args> = {
  name: "workspaces_share",
  description: `Share workspace`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workspacesShare(
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
