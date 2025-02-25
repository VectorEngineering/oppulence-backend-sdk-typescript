/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest =
  {
    keyId: string;
    organizationId?: string | undefined;
    tenantId?: string | undefined;
  };

export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus =
  {
    StatusUnspecified: "STATUS_UNSPECIFIED",
    StatusActive: "STATUS_ACTIVE",
    StatusSuspended: "STATUS_SUSPENDED",
    StatusPendingVerification: "STATUS_PENDING_VERIFICATION",
    StatusRevoked: "STATUS_REVOKED",
    StatusExpired: "STATUS_EXPIRED",
    StatusRateLimited: "STATUS_RATE_LIMITED",
    StatusPendingReview: "STATUS_PENDING_REVIEW",
    StatusDeprecated: "STATUS_DEPRECATED",
    StatusMaintenance: "STATUS_MAINTENANCE",
  } as const;
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus =
  ClosedEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus
  >;

export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes =
  {
    TenantApiKeyScopeUnspecified: "TENANT_API_KEY_SCOPE_UNSPECIFIED",
    TenantApiKeyScopeReadJobs: "TENANT_API_KEY_SCOPE_READ_JOBS",
    TenantApiKeyScopeReadLeads: "TENANT_API_KEY_SCOPE_READ_LEADS",
    TenantApiKeyScopeReadWorkflows: "TENANT_API_KEY_SCOPE_READ_WORKFLOWS",
    TenantApiKeyScopeReadAnalytics: "TENANT_API_KEY_SCOPE_READ_ANALYTICS",
    TenantApiKeyScopeReadSettings: "TENANT_API_KEY_SCOPE_READ_SETTINGS",
    TenantApiKeyScopeWriteJobs: "TENANT_API_KEY_SCOPE_WRITE_JOBS",
    TenantApiKeyScopeWriteLeads: "TENANT_API_KEY_SCOPE_WRITE_LEADS",
    TenantApiKeyScopeWriteWorkflows: "TENANT_API_KEY_SCOPE_WRITE_WORKFLOWS",
    TenantApiKeyScopeWriteSettings: "TENANT_API_KEY_SCOPE_WRITE_SETTINGS",
    TenantApiKeyScopeDeleteJobs: "TENANT_API_KEY_SCOPE_DELETE_JOBS",
    TenantApiKeyScopeDeleteLeads: "TENANT_API_KEY_SCOPE_DELETE_LEADS",
    TenantApiKeyScopeDeleteWorkflows: "TENANT_API_KEY_SCOPE_DELETE_WORKFLOWS",
    TenantApiKeyScopeExportData: "TENANT_API_KEY_SCOPE_EXPORT_DATA",
    TenantApiKeyScopeManageKeys: "TENANT_API_KEY_SCOPE_MANAGE_KEYS",
    TenantApiKeyScopeBillingRead: "TENANT_API_KEY_SCOPE_BILLING_READ",
    TenantApiKeyScopeBillingWrite: "TENANT_API_KEY_SCOPE_BILLING_WRITE",
    TenantApiKeyScopeAdmin: "TENANT_API_KEY_SCOPE_ADMIN",
  } as const;
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes =
  ClosedEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes
  >;

export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey =
  {
    id?: string | undefined;
    keyHash?: string | undefined;
    keyPrefix?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    status?:
      | GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus
      | undefined;
    scopes?:
      | Array<
        GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes
      >
      | undefined;
    maxUses?: number | undefined;
    allowedIps?: Array<string> | undefined;
    useCount?: number | undefined;
    expiresAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    deletedAt?: Date | undefined;
  };

export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData =
  {
    apiKey?:
      | GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey
      | undefined;
  };

/**
 * Retrieves details of a specific tenant API key
 */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody =
  {
    data:
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    keyId: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$Outbound =
  {
    keyId: string;
    organizationId?: string | undefined;
    tenantId?: string | undefined;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest
  > = z.object({
    keyId: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequestToJSON(
  getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest:
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$outboundSchema
      .parse(
        getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
      ),
  );
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$inboundSchema:
  z.ZodNativeEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus
  > = z.nativeEnum(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus,
  );

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$outboundSchema:
  z.ZodNativeEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus
  > =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$outboundSchema;
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$inboundSchema:
  z.ZodNativeEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes
  > = z.nativeEnum(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes,
  );

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$outboundSchema:
  z.ZodNativeEnum<
    typeof GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes
  > =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$outboundSchema;
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string().optional(),
    keyHash: z.string().optional(),
    keyPrefix: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    status:
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$inboundSchema
        .default("STATUS_UNSPECIFIED"),
    scopes: z.array(
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$inboundSchema,
    ).optional(),
    maxUses: z.number().int().optional(),
    allowedIps: z.array(z.string()).optional(),
    useCount: z.number().int().optional(),
    expiresAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    deletedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$Outbound =
  {
    id?: string | undefined;
    keyHash?: string | undefined;
    keyPrefix?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    status: string;
    scopes?: Array<string> | undefined;
    maxUses?: number | undefined;
    allowedIps?: Array<string> | undefined;
    useCount?: number | undefined;
    expiresAt?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    deletedAt?: string | undefined;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey
  > = z.object({
    id: z.string().optional(),
    keyHash: z.string().optional(),
    keyPrefix: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    status:
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdStatus$outboundSchema
        .default("STATUS_UNSPECIFIED"),
    scopes: z.array(
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdScopes$outboundSchema,
    ).optional(),
    maxUses: z.number().int().optional(),
    allowedIps: z.array(z.string()).optional(),
    useCount: z.number().int().optional(),
    expiresAt: z.date().transform(v => v.toISOString()).optional(),
    createdAt: z.date().transform(v => v.toISOString()).optional(),
    updatedAt: z.date().transform(v => v.toISOString()).optional(),
    deletedAt: z.date().transform(v => v.toISOString()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKeyToJSON(
  getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey:
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$outboundSchema
      .parse(
        getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey,
      ),
  );
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKeyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData,
    z.ZodTypeDef,
    unknown
  > = z.object({
    apiKey: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$inboundSchema
    ).optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$Outbound =
  {
    apiKey?:
      | GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$Outbound
      | undefined;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData
  > = z.object({
    apiKey: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdApiKey$outboundSchema
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdDataToJSON(
  getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData:
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$outboundSchema
      .parse(
        getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData,
      ),
  );
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdDataFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$inboundSchema
    ),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$Outbound =
  {
    data:
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$Outbound;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdData$outboundSchema
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBodyToJSON(
  getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody:
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$outboundSchema
      .parse(
        getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
      ),
  );
}

export function getApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody' from JSON`,
  );
}
