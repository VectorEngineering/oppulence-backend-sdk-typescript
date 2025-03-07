/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest = {
  jobId: string;
  userId: string;
  orgId: string;
  tenantId: string;
};

export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData = {
  content?: string | undefined;
  filename?: string | undefined;
  contentType?: string | undefined;
};

/**
 * This endpoint downloads the results of a Google Maps scraping job as CSV
 */
export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody = {
  data: GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    jobId: z.string(),
    userId: z.string(),
    orgId: z.string(),
    tenantId: z.string(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$Outbound =
  {
    jobId: string;
    userId: string;
    orgId: string;
    tenantId: string;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest
  > = z.object({
    jobId: z.string(),
    userId: z.string(),
    orgId: z.string(),
    tenantId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequestToJSON(
  getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest:
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$outboundSchema
      .parse(getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest),
  );
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadRequest' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData,
    z.ZodTypeDef,
    unknown
  > = z.object({
    content: z.string().optional(),
    filename: z.string().optional(),
    contentType: z.string().optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$Outbound = {
  content?: string | undefined;
  filename?: string | undefined;
  contentType?: string | undefined;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData
  > = z.object({
    content: z.string().optional(),
    filename: z.string().optional(),
    contentType: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadDataToJSON(
  getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData:
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$outboundSchema
      .parse(getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData),
  );
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadDataFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$inboundSchema
    ),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$Outbound =
  {
    data: GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$Outbound;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadData$outboundSchema
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBodyToJSON(
  getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody:
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$outboundSchema
      .parse(getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody),
  );
}

export function getApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1JobsJobIdDownloadResponseBody' from JSON`,
  );
}
