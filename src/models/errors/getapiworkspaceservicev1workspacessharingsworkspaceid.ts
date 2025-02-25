/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponseData =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/**
 * Standard error response object
 */
export class GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponseData;

  constructor(
    err: GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponseData,
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
      "GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse";
  }
}

/** @internal */
export const GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$inboundSchema:
  z.ZodType<
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse(
        v,
      );
    });

/** @internal */
export type GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$outboundSchema:
  z.ZodType<
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$Outbound,
    z.ZodTypeDef,
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse
  > = z.instanceof(
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse,
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
export namespace GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$ {
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$inboundSchema;
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$outboundSchema;
  /** @deprecated use `GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$Outbound` instead. */
  export type Outbound =
    GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse$Outbound;
}
