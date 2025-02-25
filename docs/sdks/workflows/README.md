# Workflows
(*workflows*)

## Overview

### Available Operations

* [update](#update) - Update workflow details
* [get](#get) - Get workflow details
* [delete](#delete) - Delete workflow
* [pause](#pause) - Pause workflow execution
* [trigger](#trigger) - Trigger workflow execution

## update

Updates the details of a specific workflow

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workflows.update({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workflowsUpdate } from "oppulence-backend-sdk/funcs/workflowsUpdate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workflowsUpdate(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowRequestBody](../../models/operations/putapileadscrapermicroserviceapiv1workspacesworkflowrequestbody.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowResponseBody](../../models/operations/putapileadscrapermicroserviceapiv1workspacesworkflowresponsebody.md)\>**

### Errors

| Error Type                                                               | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.PutApiLeadScraperMicroserviceApiV1WorkspacesWorkflowErrorResponse | 400                                                                      | application/json                                                         |
| errors.APIError                                                          | 4XX, 5XX                                                                 | \*/\*                                                                    |

## get

Retrieves details of a specific workflow

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workflows.get({
    workspaceId: "<id>",
    id: "<id>",
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
import { workflowsGet } from "oppulence-backend-sdk/funcs/workflowsGet.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workflowsGet(oppulenceBackendSDK, {
    workspaceId: "<id>",
    id: "<id>",
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
| `request`                                                                                                                                                                                    | [operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdRequest](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidrequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidresponsebody.md)\>**

### Errors

| Error Type                                                                             | Status Code                                                                            | Content Type                                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdErrorResponse | 400                                                                                    | application/json                                                                       |
| errors.APIError                                                                        | 4XX, 5XX                                                                               | \*/\*                                                                                  |

## delete

Deletes a specific workflow

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workflows.delete({
    workspaceId: "<id>",
    id: "<id>",
    orgId: "<id>",
    tenantId: "<id>",
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
import { workflowsDelete } from "oppulence-backend-sdk/funcs/workflowsDelete.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workflowsDelete(oppulenceBackendSDK, {
    workspaceId: "<id>",
    id: "<id>",
    orgId: "<id>",
    tenantId: "<id>",
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

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdRequest](../../models/operations/deleteapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidrequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdResponseBody](../../models/operations/deleteapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidresponsebody.md)\>**

### Errors

| Error Type                                                                                | Status Code                                                                               | Content Type                                                                              |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| errors.DeleteApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdErrorResponse | 400                                                                                       | application/json                                                                          |
| errors.APIError                                                                           | 4XX, 5XX                                                                                  | \*/\*                                                                                     |

## pause

Pauses the execution of a specific workflow

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workflows.pause({
    workspaceId: "<id>",
    id: "<id>",
    requestBody: {},
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
import { workflowsPause } from "oppulence-backend-sdk/funcs/workflowsPause.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workflowsPause(oppulenceBackendSDK, {
    workspaceId: "<id>",
    id: "<id>",
    requestBody: {},
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

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdPauseRequest](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidpauserequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdPauseResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidpauseresponsebody.md)\>**

### Errors

| Error Type                                                                                   | Status Code                                                                                  | Content Type                                                                                 |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdPauseErrorResponse | 400                                                                                          | application/json                                                                             |
| errors.APIError                                                                              | 4XX, 5XX                                                                                     | \*/\*                                                                                        |

## trigger

Triggers the execution of a specific workflow

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workflows.trigger({
    workspaceId: "<id>",
    id: "<id>",
    requestBody: {},
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
import { workflowsTrigger } from "oppulence-backend-sdk/funcs/workflowsTrigger.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workflowsTrigger(oppulenceBackendSDK, {
    workspaceId: "<id>",
    id: "<id>",
    requestBody: {},
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

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerRequest](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidtriggerrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsidtriggerresponsebody.md)\>**

### Errors

| Error Type                                                                                     | Status Code                                                                                    | Content Type                                                                                   |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsIdTriggerErrorResponse | 400                                                                                            | application/json                                                                               |
| errors.APIError                                                                                | 4XX, 5XX                                                                                       | \*/\*                                                                                          |