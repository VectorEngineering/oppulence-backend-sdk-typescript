# ApiKeys
(*apiKeys*)

## Overview

### Available Operations

* [create](#create) - Create a new API key
* [update](#update) - Update API key
* [list](#list) - List API keys
* [rotate](#rotate) - Rotate API key
* [get](#get) - Get API key details
* [delete](#delete) - Delete API key
* [getTenantDetails](#gettenantdetails) - Get tenant API key details

## create

Creates a new API key with specified permissions and settings

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysCreate } from "oppulence-backend-sdk/funcs/apiKeysCreate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysCreate(oppulenceBackendSDK, {});

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiLeadScraperMicroserviceApiV1ApiKeysRequestBody](../../models/operations/postapileadscrapermicroserviceapiv1apikeysrequestbody.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1ApiKeysResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1apikeysresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse | 400                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## update

Updates an existing API key&#x27;s configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.update({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysUpdate } from "oppulence-backend-sdk/funcs/apiKeysUpdate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysUpdate(oppulenceBackendSDK, {});

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutApiLeadScraperMicroserviceApiV1ApiKeysRequestBody](../../models/operations/putapileadscrapermicroserviceapiv1apikeysrequestbody.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutApiLeadScraperMicroserviceApiV1ApiKeysResponseBody](../../models/operations/putapileadscrapermicroserviceapiv1apikeysresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.PutApiLeadScraperMicroserviceApiV1ApiKeysErrorResponse | 400                                                           | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## list

Retrieves a list of API keys with optional filtering

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysList } from "oppulence-backend-sdk/funcs/apiKeysList.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysList(oppulenceBackendSDK, {});

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1ApiKeysListRequest](../../models/operations/getapileadscrapermicroserviceapiv1apikeyslistrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1ApiKeysListResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1apikeyslistresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1ApiKeysListErrorResponse | 400                                                               | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## rotate

Rotates an API key while maintaining its configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.rotate({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysRotate } from "oppulence-backend-sdk/funcs/apiKeysRotate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysRotate(oppulenceBackendSDK, {});

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiLeadScraperMicroserviceApiV1ApiKeysRotateRequestBody](../../models/operations/postapileadscrapermicroserviceapiv1apikeysrotaterequestbody.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1ApiKeysRotateResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1apikeysrotateresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1ApiKeysRotateErrorResponse | 400                                                                  | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## get

Retrieves details of a specific API key

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.get({
    keyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysGet } from "oppulence-backend-sdk/funcs/apiKeysGet.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysGet(oppulenceBackendSDK, {
    keyId: "<id>",
  });

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest](../../models/operations/getapileadscrapermicroserviceapiv1apikeyskeyidrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1apikeyskeyidresponsebody.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetApiLeadScraperMicroserviceApiV1ApiKeysKeyIdErrorResponse | 400                                                                | application/json                                                   |
| errors.APIError                                                    | 4XX, 5XX                                                           | \*/\*                                                              |

## delete

Permanently deletes an API key

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.delete({
    keyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysDelete } from "oppulence-backend-sdk/funcs/apiKeysDelete.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysDelete(oppulenceBackendSDK, {
    keyId: "<id>",
  });

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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiLeadScraperMicroserviceApiV1ApiKeysKeyIdRequest](../../models/operations/deleteapileadscrapermicroserviceapiv1apikeyskeyidrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApiLeadScraperMicroserviceApiV1ApiKeysKeyIdResponseBody](../../models/operations/deleteapileadscrapermicroserviceapiv1apikeyskeyidresponsebody.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.DeleteApiLeadScraperMicroserviceApiV1ApiKeysKeyIdErrorResponse | 400                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## getTenantDetails

Retrieves details of a specific tenant API key

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.apiKeys.getTenantDetails({
    keyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { apiKeysGetTenantDetails } from "oppulence-backend-sdk/funcs/apiKeysGetTenantDetails.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await apiKeysGetTenantDetails(oppulenceBackendSDK, {
    keyId: "<id>",
  });

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
| `request`                                                                                                                                                                                    | [operations.GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdRequest](../../models/operations/getapileadscrapermicroserviceapiv1organizationstenantsapikeyskeyidrequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1organizationstenantsapikeyskeyidresponsebody.md)\>**

### Errors

| Error Type                                                                             | Status Code                                                                            | Content Type                                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1OrganizationsTenantsApiKeysKeyIdErrorResponse | 400                                                                                    | application/json                                                                       |
| errors.APIError                                                                        | 4XX, 5XX                                                                               | \*/\*                                                                                  |