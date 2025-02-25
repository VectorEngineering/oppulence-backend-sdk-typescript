/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type GetApiLeadScraperMicroserviceApiV1LeadsErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetApiLeadScraperMicroserviceApiV1LeadsErrorResponseData;

  constructor(err: GetApiLeadScraperMicroserviceApiV1LeadsErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse";
  }
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse(v);
    });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$Outbound = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse
  > = z.instanceof(GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse)
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
export namespace GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1LeadsErrorResponse$Outbound;
}
