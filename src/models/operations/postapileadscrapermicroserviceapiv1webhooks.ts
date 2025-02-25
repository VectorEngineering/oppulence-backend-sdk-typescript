/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents = {
  TriggerEventUnspecified: "TRIGGER_EVENT_UNSPECIFIED",
  TriggerEventJobStarted: "TRIGGER_EVENT_JOB_STARTED",
  TriggerEventJobCompleted: "TRIGGER_EVENT_JOB_COMPLETED",
  TriggerEventJobFailed: "TRIGGER_EVENT_JOB_FAILED",
  TriggerEventLeadFound: "TRIGGER_EVENT_LEAD_FOUND",
  TriggerEventQuotaExceeded: "TRIGGER_EVENT_QUOTA_EXCEEDED",
  TriggerEventErrorThresholdReached: "TRIGGER_EVENT_ERROR_THRESHOLD_REACHED",
  TriggerEventRateLimitReached: "TRIGGER_EVENT_RATE_LIMIT_REACHED",
  TriggerEventDataValidationFailed: "TRIGGER_EVENT_DATA_VALIDATION_FAILED",
  TriggerEventNewProxyNeeded: "TRIGGER_EVENT_NEW_PROXY_NEEDED",
  TriggerEventScheduledMaintenance: "TRIGGER_EVENT_SCHEDULED_MAINTENANCE",
} as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents =
  ClosedEnum<typeof PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents>;

export const PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields = {
  IncludedFieldUnspecified: "INCLUDED_FIELD_UNSPECIFIED",
  IncludedFieldName: "INCLUDED_FIELD_NAME",
  IncludedFieldWebsite: "INCLUDED_FIELD_WEBSITE",
  IncludedFieldPhone: "INCLUDED_FIELD_PHONE",
  IncludedFieldAddress: "INCLUDED_FIELD_ADDRESS",
  IncludedFieldLocation: "INCLUDED_FIELD_LOCATION",
  IncludedFieldCoordinates: "INCLUDED_FIELD_COORDINATES",
  IncludedFieldGoogleRating: "INCLUDED_FIELD_GOOGLE_RATING",
  IncludedFieldReviewCount: "INCLUDED_FIELD_REVIEW_COUNT",
  IncludedFieldReviews: "INCLUDED_FIELD_REVIEWS",
  IncludedFieldBusinessHours: "INCLUDED_FIELD_BUSINESS_HOURS",
  IncludedFieldBusinessStatus: "INCLUDED_FIELD_BUSINESS_STATUS",
  IncludedFieldPlaceId: "INCLUDED_FIELD_PLACE_ID",
  IncludedFieldGoogleMapsUrl: "INCLUDED_FIELD_GOOGLE_MAPS_URL",
  IncludedFieldPhotos: "INCLUDED_FIELD_PHOTOS",
  IncludedFieldMainPhoto: "INCLUDED_FIELD_MAIN_PHOTO",
  IncludedFieldBusinessTypes: "INCLUDED_FIELD_BUSINESS_TYPES",
  IncludedFieldAmenities: "INCLUDED_FIELD_AMENITIES",
  IncludedFieldPaymentMethods: "INCLUDED_FIELD_PAYMENT_METHODS",
  IncludedFieldSocialProfiles: "INCLUDED_FIELD_SOCIAL_PROFILES",
  IncludedFieldEmployeeCount: "INCLUDED_FIELD_EMPLOYEE_COUNT",
  IncludedFieldRevenueInfo: "INCLUDED_FIELD_REVENUE_INFO",
  IncludedFieldFoundedYear: "INCLUDED_FIELD_FOUNDED_YEAR",
  IncludedFieldCertifications: "INCLUDED_FIELD_CERTIFICATIONS",
  IncludedFieldNaicsCode: "INCLUDED_FIELD_NAICS_CODE",
  IncludedFieldSicCode: "INCLUDED_FIELD_SIC_CODE",
  IncludedFieldScrapingMetadata: "INCLUDED_FIELD_SCRAPING_METADATA",
  IncludedFieldComplianceInfo: "INCLUDED_FIELD_COMPLIANCE_INFO",
  IncludedFieldAlternatePhones: "INCLUDED_FIELD_ALTERNATE_PHONES",
  IncludedFieldContactPerson: "INCLUDED_FIELD_CONTACT_PERSON",
  IncludedFieldContactEmail: "INCLUDED_FIELD_CONTACT_EMAIL",
} as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields =
  ClosedEnum<typeof PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields>;

export const PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat = {
  PayloadFormatUnspecified: "PAYLOAD_FORMAT_UNSPECIFIED",
  PayloadFormatJson: "PAYLOAD_FORMAT_JSON",
  PayloadFormatXml: "PAYLOAD_FORMAT_XML",
  PayloadFormatFormData: "PAYLOAD_FORMAT_FORM_DATA",
  PayloadFormatProtobuf: "PAYLOAD_FORMAT_PROTOBUF",
  PayloadFormatYaml: "PAYLOAD_FORMAT_YAML",
} as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat =
  ClosedEnum<typeof PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat>;

export type PostApiLeadScraperMicroserviceApiV1WebhooksMetadata = {};

export type Webhook = {
  id?: string | undefined;
  url?: string | undefined;
  authType?: string | undefined;
  authToken?: string | undefined;
  customHeaders?: { [k: string]: string } | undefined;
  maxRetries?: number | undefined;
  retryInterval?: string | undefined;
  triggerEvents?:
    | Array<PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents>
    | undefined;
  includedFields?:
    | Array<PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields>
    | undefined;
  includeFullResults?: boolean | undefined;
  payloadFormat?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat
    | undefined;
  verifySsl?: boolean | undefined;
  signingSecret?: string | undefined;
  rateLimit?: number | undefined;
  rateLimitInterval?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  lastTriggeredAt?: Date | undefined;
  successfulCalls?: number | undefined;
  failedCalls?: number | undefined;
  metadata?: PostApiLeadScraperMicroserviceApiV1WebhooksMetadata | undefined;
  webhookName?: string | undefined;
};

export type PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody = {
  organizationId?: string | undefined;
  workspaceId?: string | undefined;
  tenantId?: string | undefined;
  accountId?: string | undefined;
  webhook?: Webhook | undefined;
};

export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents =
  {
    TriggerEventUnspecified: "TRIGGER_EVENT_UNSPECIFIED",
    TriggerEventJobStarted: "TRIGGER_EVENT_JOB_STARTED",
    TriggerEventJobCompleted: "TRIGGER_EVENT_JOB_COMPLETED",
    TriggerEventJobFailed: "TRIGGER_EVENT_JOB_FAILED",
    TriggerEventLeadFound: "TRIGGER_EVENT_LEAD_FOUND",
    TriggerEventQuotaExceeded: "TRIGGER_EVENT_QUOTA_EXCEEDED",
    TriggerEventErrorThresholdReached: "TRIGGER_EVENT_ERROR_THRESHOLD_REACHED",
    TriggerEventRateLimitReached: "TRIGGER_EVENT_RATE_LIMIT_REACHED",
    TriggerEventDataValidationFailed: "TRIGGER_EVENT_DATA_VALIDATION_FAILED",
    TriggerEventNewProxyNeeded: "TRIGGER_EVENT_NEW_PROXY_NEEDED",
    TriggerEventScheduledMaintenance: "TRIGGER_EVENT_SCHEDULED_MAINTENANCE",
  } as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents =
  ClosedEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents
  >;

export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields =
  {
    IncludedFieldUnspecified: "INCLUDED_FIELD_UNSPECIFIED",
    IncludedFieldName: "INCLUDED_FIELD_NAME",
    IncludedFieldWebsite: "INCLUDED_FIELD_WEBSITE",
    IncludedFieldPhone: "INCLUDED_FIELD_PHONE",
    IncludedFieldAddress: "INCLUDED_FIELD_ADDRESS",
    IncludedFieldLocation: "INCLUDED_FIELD_LOCATION",
    IncludedFieldCoordinates: "INCLUDED_FIELD_COORDINATES",
    IncludedFieldGoogleRating: "INCLUDED_FIELD_GOOGLE_RATING",
    IncludedFieldReviewCount: "INCLUDED_FIELD_REVIEW_COUNT",
    IncludedFieldReviews: "INCLUDED_FIELD_REVIEWS",
    IncludedFieldBusinessHours: "INCLUDED_FIELD_BUSINESS_HOURS",
    IncludedFieldBusinessStatus: "INCLUDED_FIELD_BUSINESS_STATUS",
    IncludedFieldPlaceId: "INCLUDED_FIELD_PLACE_ID",
    IncludedFieldGoogleMapsUrl: "INCLUDED_FIELD_GOOGLE_MAPS_URL",
    IncludedFieldPhotos: "INCLUDED_FIELD_PHOTOS",
    IncludedFieldMainPhoto: "INCLUDED_FIELD_MAIN_PHOTO",
    IncludedFieldBusinessTypes: "INCLUDED_FIELD_BUSINESS_TYPES",
    IncludedFieldAmenities: "INCLUDED_FIELD_AMENITIES",
    IncludedFieldPaymentMethods: "INCLUDED_FIELD_PAYMENT_METHODS",
    IncludedFieldSocialProfiles: "INCLUDED_FIELD_SOCIAL_PROFILES",
    IncludedFieldEmployeeCount: "INCLUDED_FIELD_EMPLOYEE_COUNT",
    IncludedFieldRevenueInfo: "INCLUDED_FIELD_REVENUE_INFO",
    IncludedFieldFoundedYear: "INCLUDED_FIELD_FOUNDED_YEAR",
    IncludedFieldCertifications: "INCLUDED_FIELD_CERTIFICATIONS",
    IncludedFieldNaicsCode: "INCLUDED_FIELD_NAICS_CODE",
    IncludedFieldSicCode: "INCLUDED_FIELD_SIC_CODE",
    IncludedFieldScrapingMetadata: "INCLUDED_FIELD_SCRAPING_METADATA",
    IncludedFieldComplianceInfo: "INCLUDED_FIELD_COMPLIANCE_INFO",
    IncludedFieldAlternatePhones: "INCLUDED_FIELD_ALTERNATE_PHONES",
    IncludedFieldContactPerson: "INCLUDED_FIELD_CONTACT_PERSON",
    IncludedFieldContactEmail: "INCLUDED_FIELD_CONTACT_EMAIL",
  } as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields =
  ClosedEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields
  >;

export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat =
  {
    PayloadFormatUnspecified: "PAYLOAD_FORMAT_UNSPECIFIED",
    PayloadFormatJson: "PAYLOAD_FORMAT_JSON",
    PayloadFormatXml: "PAYLOAD_FORMAT_XML",
    PayloadFormatFormData: "PAYLOAD_FORMAT_FORM_DATA",
    PayloadFormatProtobuf: "PAYLOAD_FORMAT_PROTOBUF",
    PayloadFormatYaml: "PAYLOAD_FORMAT_YAML",
  } as const;
export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat =
  ClosedEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat
  >;

export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata = {};

export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhook = {
  id?: string | undefined;
  url?: string | undefined;
  authType?: string | undefined;
  authToken?: string | undefined;
  customHeaders?: { [k: string]: string } | undefined;
  maxRetries?: number | undefined;
  retryInterval?: string | undefined;
  triggerEvents?:
    | Array<PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents>
    | undefined;
  includedFields?:
    | Array<PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields>
    | undefined;
  includeFullResults?: boolean | undefined;
  payloadFormat?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat
    | undefined;
  verifySsl?: boolean | undefined;
  signingSecret?: string | undefined;
  rateLimit?: number | undefined;
  rateLimitInterval?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  lastTriggeredAt?: Date | undefined;
  successfulCalls?: number | undefined;
  failedCalls?: number | undefined;
  metadata?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata
    | undefined;
  webhookName?: string | undefined;
};

/**
 * Creates a new webhook configuration for event notifications
 */
export type PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody = {
  webhook?: PostApiLeadScraperMicroserviceApiV1WebhooksWebhook | undefined;
};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents
  > = z.nativeEnum(PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents);

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents
  > = PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields
  > = z.nativeEnum(PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields);

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields
  > = PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat
  > = z.nativeEnum(PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat);

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat
  > = PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$Outbound = {};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WebhooksMetadataToJSON(
  postApiLeadScraperMicroserviceApiV1WebhooksMetadata:
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$outboundSchema.parse(
      postApiLeadScraperMicroserviceApiV1WebhooksMetadata,
    ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WebhooksMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WebhooksMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WebhooksMetadata' from JSON`,
  );
}

/** @internal */
export const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    url: z.string().optional(),
    authType: z.string().optional(),
    authToken: z.string().optional(),
    customHeaders: z.record(z.string()).optional(),
    maxRetries: z.number().int().optional(),
    retryInterval: z.string().optional(),
    triggerEvents: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$inboundSchema,
    ).optional(),
    includedFields: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$inboundSchema,
    ).optional(),
    includeFullResults: z.boolean().optional(),
    payloadFormat:
      PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$inboundSchema
        .default("PAYLOAD_FORMAT_UNSPECIFIED"),
    verifySsl: z.boolean().optional(),
    signingSecret: z.string().optional(),
    rateLimit: z.number().int().optional(),
    rateLimitInterval: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    lastTriggeredAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    successfulCalls: z.number().int().optional(),
    failedCalls: z.number().int().optional(),
    metadata: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$inboundSchema
    ).optional(),
    webhookName: z.string().optional(),
  });

/** @internal */
export type Webhook$Outbound = {
  id?: string | undefined;
  url?: string | undefined;
  authType?: string | undefined;
  authToken?: string | undefined;
  customHeaders?: { [k: string]: string } | undefined;
  maxRetries?: number | undefined;
  retryInterval?: string | undefined;
  triggerEvents?: Array<string> | undefined;
  includedFields?: Array<string> | undefined;
  includeFullResults?: boolean | undefined;
  payloadFormat: string;
  verifySsl?: boolean | undefined;
  signingSecret?: string | undefined;
  rateLimit?: number | undefined;
  rateLimitInterval?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  lastTriggeredAt?: string | undefined;
  successfulCalls?: number | undefined;
  failedCalls?: number | undefined;
  metadata?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$Outbound
    | undefined;
  webhookName?: string | undefined;
};

/** @internal */
export const Webhook$outboundSchema: z.ZodType<
  Webhook$Outbound,
  z.ZodTypeDef,
  Webhook
> = z.object({
  id: z.string().optional(),
  url: z.string().optional(),
  authType: z.string().optional(),
  authToken: z.string().optional(),
  customHeaders: z.record(z.string()).optional(),
  maxRetries: z.number().int().optional(),
  retryInterval: z.string().optional(),
  triggerEvents: z.array(
    PostApiLeadScraperMicroserviceApiV1WebhooksTriggerEvents$outboundSchema,
  ).optional(),
  includedFields: z.array(
    PostApiLeadScraperMicroserviceApiV1WebhooksIncludedFields$outboundSchema,
  ).optional(),
  includeFullResults: z.boolean().optional(),
  payloadFormat:
    PostApiLeadScraperMicroserviceApiV1WebhooksPayloadFormat$outboundSchema
      .default("PAYLOAD_FORMAT_UNSPECIFIED"),
  verifySsl: z.boolean().optional(),
  signingSecret: z.string().optional(),
  rateLimit: z.number().int().optional(),
  rateLimitInterval: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  lastTriggeredAt: z.date().transform(v => v.toISOString()).optional(),
  successfulCalls: z.number().int().optional(),
  failedCalls: z.number().int().optional(),
  metadata: z.lazy(() =>
    PostApiLeadScraperMicroserviceApiV1WebhooksMetadata$outboundSchema
  ).optional(),
  webhookName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhook$ {
  /** @deprecated use `Webhook$inboundSchema` instead. */
  export const inboundSchema = Webhook$inboundSchema;
  /** @deprecated use `Webhook$outboundSchema` instead. */
  export const outboundSchema = Webhook$outboundSchema;
  /** @deprecated use `Webhook$Outbound` instead. */
  export type Outbound = Webhook$Outbound;
}

export function webhookToJSON(webhook: Webhook): string {
  return JSON.stringify(Webhook$outboundSchema.parse(webhook));
}

export function webhookFromJSON(
  jsonString: string,
): SafeParseResult<Webhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Webhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Webhook' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    organizationId: z.string().optional(),
    workspaceId: z.string().optional(),
    tenantId: z.string().optional(),
    accountId: z.string().optional(),
    webhook: z.lazy(() => Webhook$inboundSchema).optional(),
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$Outbound = {
  organizationId?: string | undefined;
  workspaceId?: string | undefined;
  tenantId?: string | undefined;
  accountId?: string | undefined;
  webhook?: Webhook$Outbound | undefined;
};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody
  > = z.object({
    organizationId: z.string().optional(),
    workspaceId: z.string().optional(),
    tenantId: z.string().optional(),
    accountId: z.string().optional(),
    webhook: z.lazy(() => Webhook$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WebhooksRequestBodyToJSON(
  postApiLeadScraperMicroserviceApiV1WebhooksRequestBody:
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$outboundSchema.parse(
      postApiLeadScraperMicroserviceApiV1WebhooksRequestBody,
    ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WebhooksRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents
  > = z.nativeEnum(
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents,
  );

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents
  > =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields
  > = z.nativeEnum(
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields,
  );

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields
  > =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$inboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat
  > = z.nativeEnum(
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat,
  );

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$outboundSchema:
  z.ZodNativeEnum<
    typeof PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat
  > =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$outboundSchema;
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$Outbound =
  {};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadataToJSON(
  postApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata:
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$outboundSchema
      .parse(postApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata),
  );
}

export function postApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string().optional(),
    url: z.string().optional(),
    authType: z.string().optional(),
    authToken: z.string().optional(),
    customHeaders: z.record(z.string()).optional(),
    maxRetries: z.number().int().optional(),
    retryInterval: z.string().optional(),
    triggerEvents: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$inboundSchema,
    ).optional(),
    includedFields: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$inboundSchema,
    ).optional(),
    includeFullResults: z.boolean().optional(),
    payloadFormat:
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$inboundSchema
        .default("PAYLOAD_FORMAT_UNSPECIFIED"),
    verifySsl: z.boolean().optional(),
    signingSecret: z.string().optional(),
    rateLimit: z.number().int().optional(),
    rateLimitInterval: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    lastTriggeredAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    successfulCalls: z.number().int().optional(),
    failedCalls: z.number().int().optional(),
    metadata: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$inboundSchema
    ).optional(),
    webhookName: z.string().optional(),
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$Outbound = {
  id?: string | undefined;
  url?: string | undefined;
  authType?: string | undefined;
  authToken?: string | undefined;
  customHeaders?: { [k: string]: string } | undefined;
  maxRetries?: number | undefined;
  retryInterval?: string | undefined;
  triggerEvents?: Array<string> | undefined;
  includedFields?: Array<string> | undefined;
  includeFullResults?: boolean | undefined;
  payloadFormat: string;
  verifySsl?: boolean | undefined;
  signingSecret?: string | undefined;
  rateLimit?: number | undefined;
  rateLimitInterval?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  lastTriggeredAt?: string | undefined;
  successfulCalls?: number | undefined;
  failedCalls?: number | undefined;
  metadata?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$Outbound
    | undefined;
  webhookName?: string | undefined;
};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook
  > = z.object({
    id: z.string().optional(),
    url: z.string().optional(),
    authType: z.string().optional(),
    authToken: z.string().optional(),
    customHeaders: z.record(z.string()).optional(),
    maxRetries: z.number().int().optional(),
    retryInterval: z.string().optional(),
    triggerEvents: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksTriggerEvents$outboundSchema,
    ).optional(),
    includedFields: z.array(
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksIncludedFields$outboundSchema,
    ).optional(),
    includeFullResults: z.boolean().optional(),
    payloadFormat:
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksPayloadFormat$outboundSchema
        .default("PAYLOAD_FORMAT_UNSPECIFIED"),
    verifySsl: z.boolean().optional(),
    signingSecret: z.string().optional(),
    rateLimit: z.number().int().optional(),
    rateLimitInterval: z.string().optional(),
    createdAt: z.date().transform(v => v.toISOString()).optional(),
    updatedAt: z.date().transform(v => v.toISOString()).optional(),
    lastTriggeredAt: z.date().transform(v => v.toISOString()).optional(),
    successfulCalls: z.number().int().optional(),
    failedCalls: z.number().int().optional(),
    metadata: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhooksMetadata$outboundSchema
    ).optional(),
    webhookName: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WebhooksWebhookToJSON(
  postApiLeadScraperMicroserviceApiV1WebhooksWebhook:
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$outboundSchema.parse(
      postApiLeadScraperMicroserviceApiV1WebhooksWebhook,
    ),
  );
}

export function postApiLeadScraperMicroserviceApiV1WebhooksWebhookFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WebhooksWebhook,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WebhooksWebhook' from JSON`,
  );
}

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$inboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    webhook: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$inboundSchema
    ).optional(),
  });

/** @internal */
export type PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$Outbound = {
  webhook?:
    | PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$Outbound
    | undefined;
};

/** @internal */
export const PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$outboundSchema:
  z.ZodType<
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$Outbound,
    z.ZodTypeDef,
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody
  > = z.object({
    webhook: z.lazy(() =>
      PostApiLeadScraperMicroserviceApiV1WebhooksWebhook$outboundSchema
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$ {
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$inboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$outboundSchema;
  /** @deprecated use `PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$Outbound` instead. */
  export type Outbound =
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$Outbound;
}

export function postApiLeadScraperMicroserviceApiV1WebhooksResponseBodyToJSON(
  postApiLeadScraperMicroserviceApiV1WebhooksResponseBody:
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody,
): string {
  return JSON.stringify(
    PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$outboundSchema
      .parse(postApiLeadScraperMicroserviceApiV1WebhooksResponseBody),
  );
}

export function postApiLeadScraperMicroserviceApiV1WebhooksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody' from JSON`,
  );
}
