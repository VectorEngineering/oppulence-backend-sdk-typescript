/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Standard error response object
 */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponseData =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/**
 * Standard error response object
 */
export class GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse
  extends Error
{
  error: string;
  code?: string | undefined;
  details?: any | null | undefined;

  /** The original data that was passed to this error instance. */
  data$:
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponseData;

  constructor(
    err:
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponseData,
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
      "GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse";
  }
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    error: z.string(),
    code: z.string().optional(),
    details: z.nullable(z.any()).optional(),
  })
    .transform((v) => {
      return new GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse(
        v,
      );
    });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$Outbound =
  {
    error: string;
    code?: string | undefined;
    details?: any | null | undefined;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse
  > = z.instanceof(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse,
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
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse$Outbound;
}
