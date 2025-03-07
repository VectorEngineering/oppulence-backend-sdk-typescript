/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workflowsDelete } from "../../funcs/workflowsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdRequest$inboundSchema,
};

export const tool$workflowsDelete: ToolDefinition<typeof args> = {
  name: "workflows_delete",
  description: `Delete workflow

Deletes a specific workflow`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workflowsDelete(
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
