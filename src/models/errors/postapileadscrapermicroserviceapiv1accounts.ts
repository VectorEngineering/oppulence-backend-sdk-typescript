/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type PostApiLeadScraperMicroserviceApiV1AccountsErrorResponseData = {
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;
};

/**
 * Standard error response object
 */
export class PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostApiLeadScraperMicroserviceApiV1AccountsErrorResponseData;

  constructor(
    err: PostApiLeadScraperMicroserviceApiV1AccountsErrorResponseData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    if (err.code != null) this.code = err.code;
    if (err.details != null) this.details = err.details;

    this.name = "PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse";
  }
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse(v);
    });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse
  > = z.instanceof(PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse)
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
export namespace PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse$Outbound;
}
