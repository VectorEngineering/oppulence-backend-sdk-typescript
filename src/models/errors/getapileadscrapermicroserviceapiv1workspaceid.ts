/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponseData;

  constructor(
    err: GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponseData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse";
  }
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse(v);
    });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse
  > = z.instanceof(GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse)
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
export namespace GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse$Outbound;
}
