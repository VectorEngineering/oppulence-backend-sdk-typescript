/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type PostApiWorkspaceServiceV1AccountsErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class PostApiWorkspaceServiceV1AccountsErrorResponse extends Error {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostApiWorkspaceServiceV1AccountsErrorResponseData;

  constructor(err: PostApiWorkspaceServiceV1AccountsErrorResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "PostApiWorkspaceServiceV1AccountsErrorResponse";
  }
}

/** @internal */
export const PostApiWorkspaceServiceV1AccountsErrorResponse$inboundSchema:
  z.ZodType<
    PostApiWorkspaceServiceV1AccountsErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new PostApiWorkspaceServiceV1AccountsErrorResponse(v);
    });

/** @internal */
export type PostApiWorkspaceServiceV1AccountsErrorResponse$Outbound = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/** @internal */
export const PostApiWorkspaceServiceV1AccountsErrorResponse$outboundSchema:
  z.ZodType<
    PostApiWorkspaceServiceV1AccountsErrorResponse$Outbound,
    z.ZodTypeDef,
    PostApiWorkspaceServiceV1AccountsErrorResponse
  > = z.instanceof(PostApiWorkspaceServiceV1AccountsErrorResponse)
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
export namespace PostApiWorkspaceServiceV1AccountsErrorResponse$ {
  /** @deprecated use `PostApiWorkspaceServiceV1AccountsErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostApiWorkspaceServiceV1AccountsErrorResponse$inboundSchema;
  /** @deprecated use `PostApiWorkspaceServiceV1AccountsErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostApiWorkspaceServiceV1AccountsErrorResponse$outboundSchema;
  /** @deprecated use `PostApiWorkspaceServiceV1AccountsErrorResponse$Outbound` instead. */
  export type Outbound =
    PostApiWorkspaceServiceV1AccountsErrorResponse$Outbound;
}
