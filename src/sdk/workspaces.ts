/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesCreate } from "../funcs/workspacesCreate.js";
import { workspacesCreateWorkflow } from "../funcs/workspacesCreateWorkflow.js";
import { workspacesDelete } from "../funcs/workspacesDelete.js";
import { workspacesFetchAnalytics } from "../funcs/workspacesFetchAnalytics.js";
import { workspacesFetchById } from "../funcs/workspacesFetchById.js";
import { workspacesGenerate } from "../funcs/workspacesGenerate.js";
import { workspacesGet } from "../funcs/workspacesGet.js";
import { workspacesGetAnalytics } from "../funcs/workspacesGetAnalytics.js";
import { workspacesGetComplianceReport } from "../funcs/workspacesGetComplianceReport.js";
import { workspacesGetStorageStats } from "../funcs/workspacesGetStorageStats.js";
import { workspacesList } from "../funcs/workspacesList.js";
import { workspacesListSharings } from "../funcs/workspacesListSharings.js";
import { workspacesListWorkflows } from "../funcs/workspacesListWorkflows.js";
import { workspacesModify } from "../funcs/workspacesModify.js";
import { workspacesRemoveById } from "../funcs/workspacesRemoveById.js";
import { workspacesRetrieveList } from "../funcs/workspacesRetrieveList.js";
import { workspacesShare } from "../funcs/workspacesShare.js";
import { workspacesUpdate } from "../funcs/workspacesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Workspaces extends ClientSDK {
  /**
   * Update workspace details
   *
   * @remarks
   * Updates the details of a specific workspace
   */
  async update(
    request: operations.PutApiLeadScraperMicroserviceApiV1WorkspaceRequestBody,
    options?: RequestOptions,
  ): Promise<
    operations.PutApiLeadScraperMicroserviceApiV1WorkspaceResponseBody
  > {
    return unwrapAsync(workspacesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace details
   *
   * @remarks
   * Retrieves details of a specific workspace
   */
  async fetchById(
    request: operations.GetApiLeadScraperMicroserviceApiV1WorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1WorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesFetchById(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a workspace
   *
   * @remarks
   * Deletes a specific workspace
   */
  async removeById(
    request: operations.DeleteApiLeadScraperMicroserviceApiV1WorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.DeleteApiLeadScraperMicroserviceApiV1WorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesRemoveById(
      this,
      request,
      options,
    ));
  }

  /**
   * List workspaces
   *
   * @remarks
   * Retrieves a list of workspaces for a given account
   */
  async list(
    request: operations.GetApiLeadScraperMicroserviceApiV1WorkspacesRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1WorkspacesResponseBody
  > {
    return unwrapAsync(workspacesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new workspace
   *
   * @remarks
   * Creates a new workspace for a given account
   */
  async create(
    request:
      operations.PostApiLeadScraperMicroserviceApiV1WorkspacesRequestBody,
    options?: RequestOptions,
  ): Promise<
    operations.PostApiLeadScraperMicroserviceApiV1WorkspacesResponseBody
  > {
    return unwrapAsync(workspacesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace analytics
   *
   * @remarks
   * Retrieves analytics data for a specific workspace
   */
  async fetchAnalytics(
    request:
      operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdAnalyticsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdAnalyticsResponseBody
  > {
    return unwrapAsync(workspacesFetchAnalytics(
      this,
      request,
      options,
    ));
  }

  /**
   * List workflows
   *
   * @remarks
   * Retrieves a list of workflows for a given workspace
   */
  async listWorkflows(
    request:
      operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsResponseBody
  > {
    return unwrapAsync(workspacesListWorkflows(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new workflow
   *
   * @remarks
   * Creates a new workflow for a specific workspace
   */
  async createWorkflow(
    request:
      operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsResponseBody
  > {
    return unwrapAsync(workspacesCreateWorkflow(
      this,
      request,
      options,
    ));
  }

  /**
   * Create workspace
   */
  async generate(
    request: operations.PostApiWorkspaceServiceV1WorkspacesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostApiWorkspaceServiceV1WorkspacesResponseBody> {
    return unwrapAsync(workspacesGenerate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update workspace
   */
  async modify(
    request: operations.PutApiWorkspaceServiceV1WorkspacesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PutApiWorkspaceServiceV1WorkspacesResponseBody> {
    return unwrapAsync(workspacesModify(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace analytics
   */
  async getAnalytics(
    request:
      operations.GetApiWorkspaceServiceV1WorkspacesAnalyticsWorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiWorkspaceServiceV1WorkspacesAnalyticsWorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesGetAnalytics(
      this,
      request,
      options,
    ));
  }

  /**
   * Get compliance report
   */
  async getComplianceReport(
    request:
      operations.GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesGetComplianceReport(
      this,
      request,
      options,
    ));
  }

  /**
   * List workspaces
   */
  async retrieveList(
    request: operations.GetApiWorkspaceServiceV1WorkspacesListRequest,
    options?: RequestOptions,
  ): Promise<operations.GetApiWorkspaceServiceV1WorkspacesListResponseBody> {
    return unwrapAsync(workspacesRetrieveList(
      this,
      request,
      options,
    ));
  }

  /**
   * List workspace sharings
   */
  async listSharings(
    request:
      operations.GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesListSharings(
      this,
      request,
      options,
    ));
  }

  /**
   * Get storage statistics
   */
  async getStorageStats(
    request:
      operations.GetApiWorkspaceServiceV1WorkspacesStorageStatsWorkspaceIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiWorkspaceServiceV1WorkspacesStorageStatsWorkspaceIdResponseBody
  > {
    return unwrapAsync(workspacesGetStorageStats(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace details
   */
  async get(
    request: operations.GetApiWorkspaceServiceV1WorkspacesIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetApiWorkspaceServiceV1WorkspacesIdResponseBody> {
    return unwrapAsync(workspacesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete workspace
   */
  async delete(
    request: operations.DeleteApiWorkspaceServiceV1WorkspacesIdRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteApiWorkspaceServiceV1WorkspacesIdResponseBody> {
    return unwrapAsync(workspacesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Share workspace
   */
  async share(
    request:
      operations.PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareResponseBody
  > {
    return unwrapAsync(workspacesShare(
      this,
      request,
      options,
    ));
  }
}
