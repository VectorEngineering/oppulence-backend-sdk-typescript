/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody =
  {
    parameters?: { [k: string]: string } | undefined;
  };

export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest =
  {
    workspaceId: string;
    id: string;
    requestBody:
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody;
  };

export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus =
  {
    BackgroundJobStatusUnspecified: "BACKGROUND_JOB_STATUS_UNSPECIFIED",
    BackgroundJobStatusQueued: "BACKGROUND_JOB_STATUS_QUEUED",
    BackgroundJobStatusInProgress: "BACKGROUND_JOB_STATUS_IN_PROGRESS",
    BackgroundJobStatusCompleted: "BACKGROUND_JOB_STATUS_COMPLETED",
    BackgroundJobStatusFailed: "BACKGROUND_JOB_STATUS_FAILED",
    BackgroundJobStatusCancelled: "BACKGROUND_JOB_STATUS_CANCELLED",
    BackgroundJobStatusTimedOut: "BACKGROUND_JOB_STATUS_TIMED_OUT",
  } as const;
export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus =
  ClosedEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus
  >;

/**
 * Triggers the execution of a specific workflow
 */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody =
  {
    jobId?: string | undefined;
    status?:
      | PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus
      | undefined;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    parameters: z.record(z.string()).optional(),
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$Outbound =
  {
    parameters?: { [k: string]: string } | undefined;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody
  > = z.object({
    parameters: z.record(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBodyToJSON(
  postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody:
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$outboundSchema
      .parse(
        postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody,
      ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    workspaceId: z.string(),
    id: z.string(),
    RequestBody: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$Outbound =
  {
    workspaceId: string;
    id: string;
    RequestBody:
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$Outbound;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest
  > = z.object({
    workspaceId: z.string(),
    id: z.string(),
    requestBody: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestToJSON(
  postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest:
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$outboundSchema
      .parse(
        postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest,
      ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus
  > = z.nativeEnum(
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus,
  );

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus
  > =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    jobId: z.string().optional(),
    status:
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$inboundSchema
        .default("BACKGROUND_JOB_STATUS_UNSPECIFIED"),
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$Outbound =
  {
    jobId?: string | undefined;
    status: string;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody
  > = z.object({
    jobId: z.string().optional(),
    status:
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerStatus$outboundSchema
        .default("BACKGROUND_JOB_STATUS_UNSPECIFIED"),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBodyToJSON(
  postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody:
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$outboundSchema
      .parse(
        postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody,
      ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody' from JSON`,
  );
}
