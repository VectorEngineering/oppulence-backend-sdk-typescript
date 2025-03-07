/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest = {
  keyId: string;
  organizationId?: string | undefined;
  tenantId?: string | undefined;
  accountId?: string | undefined;
  workspaceId?: string | undefined;
};

export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus = {
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
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus = ClosedEnum<
  typeof GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus
>;

export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey = {
  id?: string | undefined;
  name?: string | undefined;
  keyHash?: string | undefined;
  keyPrefix?: string | undefined;
  scopes?: Array<string> | undefined;
  allowedIps?: Array<string> | undefined;
  allowedDomains?: Array<string> | undefined;
  allowedEnvironments?: Array<string> | undefined;
  isTestKey?: boolean | undefined;
  requestsPerSecond?: number | undefined;
  requestsPerDay?: number | undefined;
  concurrentRequests?: number | undefined;
  monthlyRequestQuota?: string | undefined;
  costPerRequest?: number | undefined;
  billingTier?: string | undefined;
  totalRequests?: string | undefined;
  totalErrors?: string | undefined;
  lastUsedAt?: Date | undefined;
  averageResponseTime?: number | undefined;
  endpointUsageJson?: string | undefined;
  errorRatesJson?: string | undefined;
  recentErrors?: string | undefined;
  successfulRequestsCount?: number | undefined;
  successRate?: number | undefined;
  status?: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  expiresAt?: Date | undefined;
  deletedAt?: Date | undefined;
  lastRotatedAt?: Date | undefined;
  lastSecurityReviewAt?: Date | undefined;
  requiresClientSecret?: boolean | undefined;
  clientSecretHash?: string | undefined;
  enforceHttps?: boolean | undefined;
  enforceSigning?: boolean | undefined;
  allowedSignatureAlgorithms?: Array<string> | undefined;
  enforceMutualTls?: boolean | undefined;
  clientCertificateHash?: string | undefined;
  requireRequestSigning?: boolean | undefined;
  description?: string | undefined;
  metadataJson?: string | undefined;
  tags?: Array<string> | undefined;
  apiVersion?: string | undefined;
  supportedFeatures?: Array<string> | undefined;
  documentationUrl?: string | undefined;
  supportContact?: string | undefined;
  logAllRequests?: boolean | undefined;
  lastRotationReason?: string | undefined;
  lastRotationDate?: Date | undefined;
  rotationFrequencyDays?: number | undefined;
  complianceStandards?: Array<string> | undefined;
  requiresAuditLogging?: boolean | undefined;
  dataResidency?: string | undefined;
  approvedIntegrations?: Array<string> | undefined;
  alertEmails?: Array<string> | undefined;
  webhookUrl?: string | undefined;
  alertOnQuotaThreshold?: boolean | undefined;
  quotaAlertThreshold?: number | undefined;
  alertOnErrorSpike?: boolean | undefined;
  errorAlertThreshold?: number | undefined;
  monitoringIntegrations?: Array<string> | undefined;
  encrypted?: boolean | undefined;
  dataClassification?: string | undefined;
  maxUses?: number | undefined;
  rateLimit?: number | undefined;
};

export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData = {
  apiKey?: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey | undefined;
};

/**
 * Retrieves details of a specific API key
 */
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody = {
  data: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    keyId: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
    accountId: z.string().optional(),
    workspaceId: z.string().optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$Outbound = {
  keyId: string;
  organizationId?: string | undefined;
  tenantId?: string | undefined;
  accountId?: string | undefined;
  workspaceId?: string | undefined;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest
  > = z.object({
    keyId: z.string(),
    organizationId: z.string().optional(),
    tenantId: z.string().optional(),
    accountId: z.string().optional(),
    workspaceId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequestToJSON(
  getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest:
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$outboundSchema.parse(
      getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest,
    ),
  );
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$inboundSchema:
  z.ZodNativeEnum<typeof GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus> =
    z.nativeEnum(GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus);

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$outboundSchema:
  z.ZodNativeEnum<typeof GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus> =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$outboundSchema;
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    keyHash: z.string().optional(),
    keyPrefix: z.string().optional(),
    scopes: z.array(z.string()).optional(),
    allowedIps: z.array(z.string()).optional(),
    allowedDomains: z.array(z.string()).optional(),
    allowedEnvironments: z.array(z.string()).optional(),
    isTestKey: z.boolean().optional(),
    requestsPerSecond: z.number().int().optional(),
    requestsPerDay: z.number().int().optional(),
    concurrentRequests: z.number().int().optional(),
    monthlyRequestQuota: z.string().optional(),
    costPerRequest: z.number().optional(),
    billingTier: z.string().optional(),
    totalRequests: z.string().optional(),
    totalErrors: z.string().optional(),
    lastUsedAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    averageResponseTime: z.number().optional(),
    endpointUsageJson: z.string().optional(),
    errorRatesJson: z.string().optional(),
    recentErrors: z.string().optional(),
    successfulRequestsCount: z.number().int().optional(),
    successRate: z.number().optional(),
    status: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$inboundSchema
      .default("STATUS_UNSPECIFIED"),
    createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    expiresAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    deletedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    lastRotatedAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    lastSecurityReviewAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    requiresClientSecret: z.boolean().optional(),
    clientSecretHash: z.string().optional(),
    enforceHttps: z.boolean().optional(),
    enforceSigning: z.boolean().optional(),
    allowedSignatureAlgorithms: z.array(z.string()).optional(),
    enforceMutualTls: z.boolean().optional(),
    clientCertificateHash: z.string().optional(),
    requireRequestSigning: z.boolean().optional(),
    description: z.string().optional(),
    metadataJson: z.string().optional(),
    tags: z.array(z.string()).optional(),
    apiVersion: z.string().optional(),
    supportedFeatures: z.array(z.string()).optional(),
    documentationUrl: z.string().optional(),
    supportContact: z.string().optional(),
    logAllRequests: z.boolean().optional(),
    lastRotationReason: z.string().optional(),
    lastRotationDate: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    rotationFrequencyDays: z.number().int().optional(),
    complianceStandards: z.array(z.string()).optional(),
    requiresAuditLogging: z.boolean().optional(),
    dataResidency: z.string().optional(),
    approvedIntegrations: z.array(z.string()).optional(),
    alertEmails: z.array(z.string()).optional(),
    webhookUrl: z.string().optional(),
    alertOnQuotaThreshold: z.boolean().optional(),
    quotaAlertThreshold: z.number().optional(),
    alertOnErrorSpike: z.boolean().optional(),
    errorAlertThreshold: z.number().optional(),
    monitoringIntegrations: z.array(z.string()).optional(),
    encrypted: z.boolean().optional(),
    dataClassification: z.string().optional(),
    maxUses: z.number().int().optional(),
    rateLimit: z.number().int().optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  keyHash?: string | undefined;
  keyPrefix?: string | undefined;
  scopes?: Array<string> | undefined;
  allowedIps?: Array<string> | undefined;
  allowedDomains?: Array<string> | undefined;
  allowedEnvironments?: Array<string> | undefined;
  isTestKey?: boolean | undefined;
  requestsPerSecond?: number | undefined;
  requestsPerDay?: number | undefined;
  concurrentRequests?: number | undefined;
  monthlyRequestQuota?: string | undefined;
  costPerRequest?: number | undefined;
  billingTier?: string | undefined;
  totalRequests?: string | undefined;
  totalErrors?: string | undefined;
  lastUsedAt?: string | undefined;
  averageResponseTime?: number | undefined;
  endpointUsageJson?: string | undefined;
  errorRatesJson?: string | undefined;
  recentErrors?: string | undefined;
  successfulRequestsCount?: number | undefined;
  successRate?: number | undefined;
  status: string;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  expiresAt?: string | undefined;
  deletedAt?: string | undefined;
  lastRotatedAt?: string | undefined;
  lastSecurityReviewAt?: string | undefined;
  requiresClientSecret?: boolean | undefined;
  clientSecretHash?: string | undefined;
  enforceHttps?: boolean | undefined;
  enforceSigning?: boolean | undefined;
  allowedSignatureAlgorithms?: Array<string> | undefined;
  enforceMutualTls?: boolean | undefined;
  clientCertificateHash?: string | undefined;
  requireRequestSigning?: boolean | undefined;
  description?: string | undefined;
  metadataJson?: string | undefined;
  tags?: Array<string> | undefined;
  apiVersion?: string | undefined;
  supportedFeatures?: Array<string> | undefined;
  documentationUrl?: string | undefined;
  supportContact?: string | undefined;
  logAllRequests?: boolean | undefined;
  lastRotationReason?: string | undefined;
  lastRotationDate?: string | undefined;
  rotationFrequencyDays?: number | undefined;
  complianceStandards?: Array<string> | undefined;
  requiresAuditLogging?: boolean | undefined;
  dataResidency?: string | undefined;
  approvedIntegrations?: Array<string> | undefined;
  alertEmails?: Array<string> | undefined;
  webhookUrl?: string | undefined;
  alertOnQuotaThreshold?: boolean | undefined;
  quotaAlertThreshold?: number | undefined;
  alertOnErrorSpike?: boolean | undefined;
  errorAlertThreshold?: number | undefined;
  monitoringIntegrations?: Array<string> | undefined;
  encrypted?: boolean | undefined;
  dataClassification?: string | undefined;
  maxUses?: number | undefined;
  rateLimit?: number | undefined;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey
  > = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    keyHash: z.string().optional(),
    keyPrefix: z.string().optional(),
    scopes: z.array(z.string()).optional(),
    allowedIps: z.array(z.string()).optional(),
    allowedDomains: z.array(z.string()).optional(),
    allowedEnvironments: z.array(z.string()).optional(),
    isTestKey: z.boolean().optional(),
    requestsPerSecond: z.number().int().optional(),
    requestsPerDay: z.number().int().optional(),
    concurrentRequests: z.number().int().optional(),
    monthlyRequestQuota: z.string().optional(),
    costPerRequest: z.number().optional(),
    billingTier: z.string().optional(),
    totalRequests: z.string().optional(),
    totalErrors: z.string().optional(),
    lastUsedAt: z.date().transform(v => v.toISOString()).optional(),
    averageResponseTime: z.number().optional(),
    endpointUsageJson: z.string().optional(),
    errorRatesJson: z.string().optional(),
    recentErrors: z.string().optional(),
    successfulRequestsCount: z.number().int().optional(),
    successRate: z.number().optional(),
    status: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdStatus$outboundSchema
      .default("STATUS_UNSPECIFIED"),
    createdAt: z.date().transform(v => v.toISOString()).optional(),
    updatedAt: z.date().transform(v => v.toISOString()).optional(),
    expiresAt: z.date().transform(v => v.toISOString()).optional(),
    deletedAt: z.date().transform(v => v.toISOString()).optional(),
    lastRotatedAt: z.date().transform(v => v.toISOString()).optional(),
    lastSecurityReviewAt: z.date().transform(v => v.toISOString()).optional(),
    requiresClientSecret: z.boolean().optional(),
    clientSecretHash: z.string().optional(),
    enforceHttps: z.boolean().optional(),
    enforceSigning: z.boolean().optional(),
    allowedSignatureAlgorithms: z.array(z.string()).optional(),
    enforceMutualTls: z.boolean().optional(),
    clientCertificateHash: z.string().optional(),
    requireRequestSigning: z.boolean().optional(),
    description: z.string().optional(),
    metadataJson: z.string().optional(),
    tags: z.array(z.string()).optional(),
    apiVersion: z.string().optional(),
    supportedFeatures: z.array(z.string()).optional(),
    documentationUrl: z.string().optional(),
    supportContact: z.string().optional(),
    logAllRequests: z.boolean().optional(),
    lastRotationReason: z.string().optional(),
    lastRotationDate: z.date().transform(v => v.toISOString()).optional(),
    rotationFrequencyDays: z.number().int().optional(),
    complianceStandards: z.array(z.string()).optional(),
    requiresAuditLogging: z.boolean().optional(),
    dataResidency: z.string().optional(),
    approvedIntegrations: z.array(z.string()).optional(),
    alertEmails: z.array(z.string()).optional(),
    webhookUrl: z.string().optional(),
    alertOnQuotaThreshold: z.boolean().optional(),
    quotaAlertThreshold: z.number().optional(),
    alertOnErrorSpike: z.boolean().optional(),
    errorAlertThreshold: z.number().optional(),
    monitoringIntegrations: z.array(z.string()).optional(),
    encrypted: z.boolean().optional(),
    dataClassification: z.string().optional(),
    maxUses: z.number().int().optional(),
    rateLimit: z.number().int().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKeyToJSON(
  getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey:
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$outboundSchema.parse(
      getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey,
    ),
  );
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKeyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData,
    z.ZodTypeDef,
    unknown
  > = z.object({
    apiKey: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$inboundSchema
    ).optional(),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$Outbound = {
  apiKey?:
    | GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$Outbound
    | undefined;
};

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData
  > = z.object({
    apiKey: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdApiKey$outboundSchema
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdDataToJSON(
  getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData:
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$outboundSchema.parse(
      getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData,
    ),
  );
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdDataFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData' from JSON`,
  );
}

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$inboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$inboundSchema
    ),
  });

/** @internal */
export type GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$Outbound =
  {
    data: GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$Outbound;
  };

/** @internal */
export const GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$outboundSchema:
  z.ZodType<
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody
  > = z.object({
    data: z.lazy(() =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdData$outboundSchema
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$ {
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$inboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$outboundSchema;
  /** @deprecated use `GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$Outbound` instead. */
  export type Outbound =
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$Outbound;
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBodyToJSON(
  getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody:
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody,
): string {
  return JSON.stringify(
    GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$outboundSchema
      .parse(getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody),
  );
}

export function getApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody' from JSON`,
  );
}
