/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponseData;

  constructor(
    err: PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponseData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse";
  }
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse(v);
    });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse
  > = z.instanceof(PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse)
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
export namespace PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse$Outbound;
}
