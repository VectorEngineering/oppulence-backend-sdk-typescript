/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workflowsDelete } from "../funcs/workflowsDelete.js";
import { workflowsGet } from "../funcs/workflowsGet.js";
import { workflowsPause } from "../funcs/workflowsPause.js";
import { workflowsTrigger } from "../funcs/workflowsTrigger.js";
import { workflowsUpdate } from "../funcs/workflowsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Workflows extends ClientSDK {
  /**
   * Update workflow details
   *
   * @remarks
   * Updates the details of a specific workflow
   */
  async update(
    request:
      operations.PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowRequestBody,
    options?: RequestOptions,
  ): Promise<
    operations.PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowResponseBody
  > {
    return unwrapAsync(workflowsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workflow details
   *
   * @remarks
   * Retrieves details of a specific workflow
   */
  async get(
    request:
      operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdResponseBody
  > {
    return unwrapAsync(workflowsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete workflow
   *
   * @remarks
   * Deletes a specific workflow
   */
  async delete(
    request:
      operations.DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdResponseBody
  > {
    return unwrapAsync(workflowsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Pause workflow execution
   *
   * @remarks
   * Pauses the execution of a specific workflow
   */
  async pause(
    request:
      operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdPauseRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdPauseResponseBody
  > {
    return unwrapAsync(workflowsPause(
      this,
      request,
      options,
    ));
  }

  /**
   * Trigger workflow execution
   *
   * @remarks
   * Triggers the execution of a specific workflow
   */
  async trigger(
    request:
      operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody
  > {
    return unwrapAsync(workflowsTrigger(
      this,
      request,
      options,
    ));
  }
}
