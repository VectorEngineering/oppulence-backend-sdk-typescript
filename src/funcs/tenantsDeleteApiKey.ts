/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { OppulenceBackendSDKCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Delete tenant API key
 *
 * @remarks
 * Permanently deletes a tenant API key
 */
export function tenantsDeleteApiKey(
  client: OppulenceBackendSDKCore,
  request:
    operations.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
    | errors.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: OppulenceBackendSDKCore,
  request:
    operations.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
      | errors.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations
        .DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    keyId: encodeSimple("keyId", payload.keyId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/api/lead-scraper-microservice/api/v1/organizations/tenants/api-keys/{keyId}",
  )(pathParams);

  const query = encodeFormQuery({
    "organizationId": payload.organizationId,
    "tenantId": payload.tenantId,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID:
      "delete_/api/lead-scraper-microservice/api/v1/organizations/tenants/api-keys/{keyId}",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 1200000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    method: "DELETE",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
    | errors.DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      operations
        .DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$inboundSchema,
    ),
    M.jsonErr(
      400,
      errors
        .DeleteApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$inboundSchema,
    ),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
