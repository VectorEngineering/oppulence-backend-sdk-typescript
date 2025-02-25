# TenantApiKeys
(*tenantApiKeys*)

## Overview

### Available Operations

* [create](#create) - Create a new tenant API key
* [update](#update) - Update tenant API key

## create

Creates a new API key for a tenant with specified permissions

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.tenantApiKeys.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { tenantApiKeysCreate } from "oppulence-backend-sdk/funcs/tenantApiKeysCreate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await tenantApiKeysCreate(oppulenceBackendSDK, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.PostApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysRequestBody](../../models/operations/postapileadscrapermicroserviceapiv1organizationstenantsapikeysrequestbody.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1organizationstenantsapikeysresponsebody.md)\>**

### Errors

| Error Type                                                                         | Status Code                                                                        | Content Type                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysErrorResponse | 400                                                                                | application/json                                                                   |
| errors.APIError                                                                    | 4XX, 5XX                                                                           | \*/\*                                                                              |

## update

Updates an existing tenant API key&#x27;s configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.tenantApiKeys.update({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { tenantApiKeysUpdate } from "oppulence-backend-sdk/funcs/tenantApiKeysUpdate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await tenantApiKeysUpdate(oppulenceBackendSDK, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PutApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysRequestBody](../../models/operations/putapileadscrapermicroserviceapiv1organizationstenantsapikeysrequestbody.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.PutApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysResponseBody](../../models/operations/putapileadscrapermicroserviceapiv1organizationstenantsapikeysresponsebody.md)\>**

### Errors

| Error Type                                                                        | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.PutApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysErrorResponse | 400                                                                               | application/json                                                                  |
| errors.APIError                                                                   | 4XX, 5XX                                                                          | \*/\*                                                                             |