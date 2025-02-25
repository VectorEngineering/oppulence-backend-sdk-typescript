/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tenantsDelete } from "../../funcs/tenantsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .DeleteApiLeadScraperMicroserviceApiV1OrganizationTenantsOrganizationIdTenantIdRequest$inboundSchema,
};

export const tool$tenantsDelete: ToolDefinition<typeof args> = {
  name: "tenants_delete",
  description: `Delete a tenant

Permanently deletes a tenant and all associated resources`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tenantsDelete(
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
