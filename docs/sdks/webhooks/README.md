# Webhooks
(*webhooks*)

## Overview

### Available Operations

* [list](#list) - List webhooks
* [create](#create) - Create webhook
* [update](#update) - Update webhook
* [get](#get) - Get webhook
* [delete](#delete) - Delete webhook

## list

Lists all webhook configurations with pagination

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.webhooks.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { webhooksList } from "oppulence-backend-sdk/funcs/webhooksList.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await webhooksList(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1WebhooksRequest](../../models/operations/getapileadscrapermicroserviceapiv1webhooksrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WebhooksResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1webhooksresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1WebhooksErrorResponse | 400                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## create

Creates a new webhook configuration for event notifications

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.webhooks.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { webhooksCreate } from "oppulence-backend-sdk/funcs/webhooksCreate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await webhooksCreate(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PostApiLeadScraperMicroserviceApiV1WebhooksRequestBody](../../models/operations/postapileadscrapermicroserviceapiv1webhooksrequestbody.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1WebhooksResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1webhooksresponsebody.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1WebhooksErrorResponse | 400                                                             | application/json                                                |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## update

Updates an existing webhook configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.webhooks.update({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { webhooksUpdate } from "oppulence-backend-sdk/funcs/webhooksUpdate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await webhooksUpdate(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PutApiLeadScraperMicroserviceApiV1WebhooksRequestBody](../../models/operations/putapileadscrapermicroserviceapiv1webhooksrequestbody.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutApiLeadScraperMicroserviceApiV1WebhooksResponseBody](../../models/operations/putapileadscrapermicroserviceapiv1webhooksresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.PutApiLeadScraperMicroserviceApiV1WebhooksErrorResponse | 400                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## get

Retrieves details of a specific webhook configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.webhooks.get({
    webhookId: "<id>",
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
import { webhooksGet } from "oppulence-backend-sdk/funcs/webhooksGet.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await webhooksGet(oppulenceBackendSDK, {
    webhookId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1WebhooksWebhookIdRequest](../../models/operations/getapileadscrapermicroserviceapiv1webhookswebhookidrequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WebhooksWebhookIdResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1webhookswebhookidresponsebody.md)\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1WebhooksWebhookIdErrorResponse | 400                                                                     | application/json                                                        |
| errors.APIError                                                         | 4XX, 5XX                                                                | \*/\*                                                                   |

## delete

Deletes a webhook configuration

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.webhooks.delete({
    webhookId: "<id>",
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
import { webhooksDelete } from "oppulence-backend-sdk/funcs/webhooksDelete.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await webhooksDelete(oppulenceBackendSDK, {
    webhookId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteApiLeadScraperMicroserviceApiV1WebhooksWebhookIdRequest](../../models/operations/deleteapileadscrapermicroserviceapiv1webhookswebhookidrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApiLeadScraperMicroserviceApiV1WebhooksWebhookIdResponseBody](../../models/operations/deleteapileadscrapermicroserviceapiv1webhookswebhookidresponsebody.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.DeleteApiLeadScraperMicroserviceApiV1WebhooksWebhookIdErrorResponse | 400                                                                        | application/json                                                           |
| errors.APIError                                                            | 4XX, 5XX                                                                   | \*/\*                                                                      |