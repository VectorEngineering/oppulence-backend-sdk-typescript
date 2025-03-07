/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest = {
  id: string;
  organizationId?: string | undefined;
  tenantId?: string | undefined;
};

/**
 * Permanently deletes an account and associated resources
 */
export type DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody = {
  success?: boolean | undefined;
};

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$inboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
  });

/** @internal */
export type DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$Outbound = {
  id: string;
  organizationId?: string | undefined;
  tenantId?: string | undefined;
};

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$outboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest
  > = z.object({
    id: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$ {
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$inboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$outboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$Outbound;
}

export function deleteApiLeadScraperMicroserviceApiV1AccountsIdRequestToJSON(
  deleteApiLeadScraperMicroserviceApiV1AccountsIdRequest:
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest,
): string {
  return JSON.stringify(
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$outboundSchema.parse(
      deleteApiLeadScraperMicroserviceApiV1AccountsIdRequest,
    ),
  );
}

export function deleteApiLeadScraperMicroserviceApiV1AccountsIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteApiLeadScraperMicroserviceApiV1AccountsIdRequest' from JSON`,
  );
}

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$inboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    success: z.boolean().optional(),
  });

/** @internal */
export type DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$Outbound =
  {
    success?: boolean | undefined;
  };

/** @internal */
export const DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$outboundSchema:
  z.ZodType<
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody
  > = z.object({
    success: z.boolean().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$ {
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$inboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$outboundSchema;
  /** @deprecated use `DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$Outbound` instead. */
  export type Outbound =
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$Outbound;
}

export function deleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBodyToJSON(
  deleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody:
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody,
): string {
  return JSON.stringify(
    DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$outboundSchema
      .parse(deleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody),
  );
}

export function deleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteApiLeadScraperMicroserviceApiV1AccountsIdResponseBody' from JSON`,
  );
}
