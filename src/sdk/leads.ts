/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leadsGet } from "../funcs/leadsGet.js";
import { leadsList } from "../funcs/leadsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leads extends ClientSDK {
  /**
   * List leads
   *
   * @remarks
   * Retrieves a paginated list of leads with comprehensive filtering options
   */
  async list(
    request: operations.GetApiLeadScraperMicroserviceApiV1LeadsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetApiLeadScraperMicroserviceApiV1LeadsResponseBody> {
    return unwrapAsync(leadsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get lead details
   *
   * @remarks
   * Retrieves detailed information about a specific lead
   */
  async get(
    request: operations.GetApiLeadScraperMicroserviceApiV1LeadsLeadIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetApiLeadScraperMicroserviceApiV1LeadsLeadIdResponseBody
  > {
    return unwrapAsync(leadsGet(
      this,
      request,
      options,
    ));
  }
}
