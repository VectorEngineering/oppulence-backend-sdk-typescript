/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponseData;

  constructor(err: PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse";
  }
}

/** @internal */
export const PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$inboundSchema:
  z.ZodType<
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse(v);
    });

/** @internal */
export type PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$Outbound = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/** @internal */
export const PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$outboundSchema:
  z.ZodType<
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$Outbound,
    z.ZodTypeDef,
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse
  > = z.instanceof(PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse)
    .transform(v => v.data$)
    .pipe(z.object({
      error: z.string(),
      code: z.string().optional(),
      details: z.nullable(z.any()).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$ {
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$inboundSchema;
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$outboundSchema;
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$Outbound` instead. */
  export type Outbound =
    PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse$Outbound;
}
