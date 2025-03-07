/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponseData =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/**
 * Standard error response object
 */
export class GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$:
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponseData;

  constructor(
    err:
      GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponseData,
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
      "GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse";
  }
}

/** @internal */
export const GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$inboundSchema:
  z.ZodType<
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse(
        v,
      );
    });

/** @internal */
export type GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$outboundSchema:
  z.ZodType<
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$Outbound,
    z.ZodTypeDef,
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse
  > = z.instanceof(
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse,
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
export namespace GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$ {
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$inboundSchema;
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$outboundSchema;
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$Outbound` instead. */
  export type Outbound =
    GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse$Outbound;
}
