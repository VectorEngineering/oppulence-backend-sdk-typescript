/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponseData =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/**
 * Standard error response object
 */
export class PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponseData;

  constructor(
    err: PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponseData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name =
      "PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse";
  }
}

/** @internal */
export const PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$inboundSchema:
  z.ZodType<
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse(
        v,
      );
    });

/** @internal */
export type PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$outboundSchema:
  z.ZodType<
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$Outbound,
    z.ZodTypeDef,
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse
  > = z.instanceof(
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse,
  )
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
export namespace PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$ {
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$inboundSchema;
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$outboundSchema;
  /** @deprecated use `PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$Outbound` instead. */
  export type Outbound =
    PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse$Outbound;
}
