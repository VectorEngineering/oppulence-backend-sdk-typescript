/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest = {
  id: string;
};

/**
 * Permanently deletes an organization and all associated resources
 */
export type DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$inboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
  });

/** @internal */
export type DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$Outbound =
  {
    id: string;
  };

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$outboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest
  > = z.object({
    id: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$ {
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$inboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$outboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$Outbound;
}

export function deleteApiLeadScraperMicroserviceApiV1OrganizationIdRequestToJSON(
  deleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest:
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest,
): string {
  return JSON.stringify(
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$outboundSchema
      .parse(deleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest),
  );
}

export function deleteApiLeadScraperMicroserviceApiV1OrganizationIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteApiLeadScraperMicroserviceApiV1OrganizationIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$inboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    success: z.boolean().optional(),
  });

/** @internal */
export type DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$Outbound =
  {
    success?: boolean | undefined;
  };

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$outboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody
  > = z.object({
    success: z.boolean().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$ {
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$inboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$outboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$Outbound` instead. */
  export type Outbound =
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$Outbound;
}

export function deleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBodyToJSON(
  deleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody:
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody,
): string {
  return JSON.stringify(
    DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$outboundSchema
      .parse(deleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody),
  );
}

export function deleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteApiLeadScraperMicroserviceApiV1OrganizationIdResponseBody' from JSON`,
  );
}
