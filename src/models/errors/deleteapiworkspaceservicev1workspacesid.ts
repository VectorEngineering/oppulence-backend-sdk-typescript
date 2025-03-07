/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponseData;

  constructor(err: DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse";
  }
}

/** @internal */
export const DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$inboundSchema:
  z.ZodType<
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse(v);
    });

/** @internal */
export type DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$Outbound = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/** @internal */
export const DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$outboundSchema:
  z.ZodType<
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$Outbound,
    z.ZodTypeDef,
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse
  > = z.instanceof(DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse)
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
export namespace DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$ {
  /** @deprecated use `DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$inboundSchema;
  /** @deprecated use `DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$outboundSchema;
  /** @deprecated use `DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$Outbound` instead. */
  export type Outbound =
    DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse$Outbound;
}
