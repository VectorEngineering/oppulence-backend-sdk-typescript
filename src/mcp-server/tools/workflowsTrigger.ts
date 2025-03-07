/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workflowsTrigger } from "../../funcs/workflowsTrigger.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$inboundSchema,
};

export const tool$workflowsTrigger: ToolDefinition<typeof args> = {
  name: "workflows_trigger",
  description: `Trigger workflow execution

Triggers the execution of a specific workflow`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await workflowsTrigger(
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
