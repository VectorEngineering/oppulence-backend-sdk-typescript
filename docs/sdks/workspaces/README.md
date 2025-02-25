# Workspaces
(*workspaces*)

## Overview

### Available Operations

* [update](#update) - Update workspace details
* [fetchById](#fetchbyid) - Get workspace details
* [removeById](#removebyid) - Delete a workspace
* [list](#list) - List workspaces
* [create](#create) - Create a new workspace
* [fetchAnalytics](#fetchanalytics) - Get workspace analytics
* [listWorkflows](#listworkflows) - List workflows
* [createWorkflow](#createworkflow) - Create a new workflow
* [generate](#generate) - Create workspace
* [modify](#modify) - Update workspace
* [getAnalytics](#getanalytics) - Get workspace analytics
* [getComplianceReport](#getcompliancereport) - Get compliance report
* [retrieveList](#retrievelist) - List workspaces
* [listSharings](#listsharings) - List workspace sharings
* [getStorageStats](#getstoragestats) - Get storage statistics
* [get](#get) - Get workspace details
* [delete](#delete) - Delete workspace
* [share](#share) - Share workspace

## update

Updates the details of a specific workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.update({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workspacesUpdate } from "oppulence-backend-sdk/funcs/workspacesUpdate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesUpdate(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PutApiLeadScraperMicroserviceApiV1WorkspaceRequestBody](../../models/operations/putapileadscrapermicroserviceapiv1workspacerequestbody.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutApiLeadScraperMicroserviceApiV1WorkspaceResponseBody](../../models/operations/putapileadscrapermicroserviceapiv1workspaceresponsebody.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PutApiLeadScraperMicroserviceApiV1WorkspaceErrorResponse | 400                                                             | application/json                                                |
| errors.APIError                                                 | 4XX, 5XX                                                        | \*/\*                                                           |

## fetchById

Retrieves details of a specific workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.fetchById({
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
import { workspacesFetchById } from "oppulence-backend-sdk/funcs/workspacesFetchById.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesFetchById(oppulenceBackendSDK, {
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1WorkspaceIdRequest](../../models/operations/getapileadscrapermicroserviceapiv1workspaceidrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WorkspaceIdResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1workspaceidresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse | 400                                                               | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## removeById

Deletes a specific workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.removeById({
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
import { workspacesRemoveById } from "oppulence-backend-sdk/funcs/workspacesRemoveById.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesRemoveById(oppulenceBackendSDK, {
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiLeadScraperMicroserviceApiV1WorkspaceIdRequest](../../models/operations/deleteapileadscrapermicroserviceapiv1workspaceidrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApiLeadScraperMicroserviceApiV1WorkspaceIdResponseBody](../../models/operations/deleteapileadscrapermicroserviceapiv1workspaceidresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.DeleteApiLeadScraperMicroserviceApiV1WorkspaceIdErrorResponse | 400                                                                  | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |

## list

Retrieves a list of workspaces for a given account

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workspacesList } from "oppulence-backend-sdk/funcs/workspacesList.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesList(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetApiLeadScraperMicroserviceApiV1WorkspacesRequest](../../models/operations/getapileadscrapermicroserviceapiv1workspacesrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WorkspacesResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1workspacesresponsebody.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.GetApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse | 400                                                              | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## create

Creates a new workspace for a given account

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workspacesCreate } from "oppulence-backend-sdk/funcs/workspacesCreate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesCreate(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PostApiLeadScraperMicroserviceApiV1WorkspacesRequestBody](../../models/operations/postapileadscrapermicroserviceapiv1workspacesrequestbody.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1WorkspacesResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1workspacesresponsebody.md)\>**

### Errors

| Error Type                                                        | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1WorkspacesErrorResponse | 400                                                               | application/json                                                  |
| errors.APIError                                                   | 4XX, 5XX                                                          | \*/\*                                                             |

## fetchAnalytics

Retrieves analytics data for a specific workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.fetchAnalytics({
    workspaceId: "<id>",
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
import { workspacesFetchAnalytics } from "oppulence-backend-sdk/funcs/workspacesFetchAnalytics.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesFetchAnalytics(oppulenceBackendSDK, {
    workspaceId: "<id>",
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

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdAnalyticsRequest](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidanalyticsrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdAnalyticsResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidanalyticsresponsebody.md)\>**

### Errors

| Error Type                                                                           | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdAnalyticsErrorResponse | 400                                                                                  | application/json                                                                     |
| errors.APIError                                                                      | 4XX, 5XX                                                                             | \*/\*                                                                                |

## listWorkflows

Retrieves a list of workflows for a given workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.listWorkflows({
    workspaceId: "<id>",
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
import { workspacesListWorkflows } from "oppulence-backend-sdk/funcs/workspacesListWorkflows.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesListWorkflows(oppulenceBackendSDK, {
    workspaceId: "<id>",
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

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsRequest](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[operations.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsResponseBody](../../models/operations/getapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsresponsebody.md)\>**

### Errors

| Error Type                                                                           | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.GetApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsErrorResponse | 400                                                                                  | application/json                                                                     |
| errors.APIError                                                                      | 4XX, 5XX                                                                             | \*/\*                                                                                |

## createWorkflow

Creates a new workflow for a specific workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.createWorkflow({
    workspaceId: "<id>",
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
import { workspacesCreateWorkflow } from "oppulence-backend-sdk/funcs/workspacesCreateWorkflow.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesCreateWorkflow(oppulenceBackendSDK, {
    workspaceId: "<id>",
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

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsRequest](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsrequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsResponseBody](../../models/operations/postapileadscrapermicroserviceapiv1workspacesworkspaceidworkflowsresponsebody.md)\>**

### Errors

| Error Type                                                                            | Status Code                                                                           | Content Type                                                                          |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| errors.PostApiLeadScraperMicroserviceApiV1WorkspacesWorkspaceIdWorkflowsErrorResponse | 400                                                                                   | application/json                                                                      |
| errors.APIError                                                                       | 4XX, 5XX                                                                              | \*/\*                                                                                 |

## generate

Create workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.generate({
    name: "<value>",
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
import { workspacesGenerate } from "oppulence-backend-sdk/funcs/workspacesGenerate.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesGenerate(oppulenceBackendSDK, {
    name: "<value>",
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
| `request`                                                                                                                                                                      | [operations.PostApiWorkspaceServiceV1WorkspacesRequestBody](../../models/operations/postapiworkspaceservicev1workspacesrequestbody.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiWorkspaceServiceV1WorkspacesResponseBody](../../models/operations/postapiworkspaceservicev1workspacesresponsebody.md)\>**

### Errors

| Error Type                                              | Status Code                                             | Content Type                                            |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| errors.PostApiWorkspaceServiceV1WorkspacesErrorResponse | 400                                                     | application/json                                        |
| errors.APIError                                         | 4XX, 5XX                                                | \*/\*                                                   |

## modify

Update workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.modify({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workspacesModify } from "oppulence-backend-sdk/funcs/workspacesModify.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesModify(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.PutApiWorkspaceServiceV1WorkspacesRequestBody](../../models/operations/putapiworkspaceservicev1workspacesrequestbody.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutApiWorkspaceServiceV1WorkspacesResponseBody](../../models/operations/putapiworkspaceservicev1workspacesresponsebody.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.PutApiWorkspaceServiceV1WorkspacesErrorResponse | 400                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## getAnalytics

Get workspace analytics

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.getAnalytics({
    workspaceId: "<id>",
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
import { workspacesGetAnalytics } from "oppulence-backend-sdk/funcs/workspacesGetAnalytics.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesGetAnalytics(oppulenceBackendSDK, {
    workspaceId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetApiWorkspaceServiceV1WorkspacesAnalyticsWorkspaceIdRequest](../../models/operations/getapiworkspaceservicev1workspacesanalyticsworkspaceidrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesAnalyticsWorkspaceIdResponseBody](../../models/operations/getapiworkspaceservicev1workspacesanalyticsworkspaceidresponsebody.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesAnalyticsWorkspaceIdErrorResponse | 400                                                                        | application/json                                                           |
| errors.APIError                                                            | 4XX, 5XX                                                                   | \*/\*                                                                      |

## getComplianceReport

Get compliance report

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.getComplianceReport({
    workspaceId: "<id>",
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
import { workspacesGetComplianceReport } from "oppulence-backend-sdk/funcs/workspacesGetComplianceReport.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesGetComplianceReport(oppulenceBackendSDK, {
    workspaceId: "<id>",
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

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdRequest](../../models/operations/getapiworkspaceservicev1workspacescompliancereportworkspaceidrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdResponseBody](../../models/operations/getapiworkspaceservicev1workspacescompliancereportworkspaceidresponsebody.md)\>**

### Errors

| Error Type                                                                        | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdErrorResponse | 400                                                                               | application/json                                                                  |
| errors.APIError                                                                   | 4XX, 5XX                                                                          | \*/\*                                                                             |

## retrieveList

List workspaces

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.retrieveList({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OppulenceBackendSDKCore } from "oppulence-backend-sdk/core.js";
import { workspacesRetrieveList } from "oppulence-backend-sdk/funcs/workspacesRetrieveList.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesRetrieveList(oppulenceBackendSDK, {});

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
| `request`                                                                                                                                                                      | [operations.GetApiWorkspaceServiceV1WorkspacesListRequest](../../models/operations/getapiworkspaceservicev1workspaceslistrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesListResponseBody](../../models/operations/getapiworkspaceservicev1workspaceslistresponsebody.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesListErrorResponse | 400                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## listSharings

List workspace sharings

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.listSharings({
    workspaceId: "<id>",
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
import { workspacesListSharings } from "oppulence-backend-sdk/funcs/workspacesListSharings.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesListSharings(oppulenceBackendSDK, {
    workspaceId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdRequest](../../models/operations/getapiworkspaceservicev1workspacessharingsworkspaceidrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdResponseBody](../../models/operations/getapiworkspaceservicev1workspacessharingsworkspaceidresponsebody.md)\>**

### Errors

| Error Type                                                                | Status Code                                                               | Content Type                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesSharingsWorkspaceIdErrorResponse | 400                                                                       | application/json                                                          |
| errors.APIError                                                           | 4XX, 5XX                                                                  | \*/\*                                                                     |

## getStorageStats

Get storage statistics

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.getStorageStats({
    workspaceId: "<id>",
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
import { workspacesGetStorageStats } from "oppulence-backend-sdk/funcs/workspacesGetStorageStats.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesGetStorageStats(oppulenceBackendSDK, {
    workspaceId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetApiWorkspaceServiceV1WorkspacesStorageStatsWorkspaceIdRequest](../../models/operations/getapiworkspaceservicev1workspacesstoragestatsworkspaceidrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesStorageStatsWorkspaceIdResponseBody](../../models/operations/getapiworkspaceservicev1workspacesstoragestatsworkspaceidresponsebody.md)\>**

### Errors

| Error Type                                                                    | Status Code                                                                   | Content Type                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesStorageStatsWorkspaceIdErrorResponse | 400                                                                           | application/json                                                              |
| errors.APIError                                                               | 4XX, 5XX                                                                      | \*/\*                                                                         |

## get

Get workspace details

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.get({
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
import { workspacesGet } from "oppulence-backend-sdk/funcs/workspacesGet.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesGet(oppulenceBackendSDK, {
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiWorkspaceServiceV1WorkspacesIdRequest](../../models/operations/getapiworkspaceservicev1workspacesidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiWorkspaceServiceV1WorkspacesIdResponseBody](../../models/operations/getapiworkspaceservicev1workspacesidresponsebody.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.GetApiWorkspaceServiceV1WorkspacesIdErrorResponse | 400                                                      | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## delete

Delete workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.delete({
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
import { workspacesDelete } from "oppulence-backend-sdk/funcs/workspacesDelete.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesDelete(oppulenceBackendSDK, {
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiWorkspaceServiceV1WorkspacesIdRequest](../../models/operations/deleteapiworkspaceservicev1workspacesidrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApiWorkspaceServiceV1WorkspacesIdResponseBody](../../models/operations/deleteapiworkspaceservicev1workspacesidresponsebody.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.DeleteApiWorkspaceServiceV1WorkspacesIdErrorResponse | 400                                                         | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## share

Share workspace

### Example Usage

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.workspaces.share({
    workspaceId: "<id>",
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
import { workspacesShare } from "oppulence-backend-sdk/funcs/workspacesShare.js";

// Use `OppulenceBackendSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const oppulenceBackendSDK = new OppulenceBackendSDKCore();

async function run() {
  const res = await workspacesShare(oppulenceBackendSDK, {
    workspaceId: "<id>",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareRequest](../../models/operations/postapiworkspaceservicev1workspacesworkspaceidsharerequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareResponseBody](../../models/operations/postapiworkspaceservicev1workspacesworkspaceidshareresponsebody.md)\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.PostApiWorkspaceServiceV1WorkspacesWorkspaceIdShareErrorResponse | 400                                                                     | application/json                                                        |
| errors.APIError                                                         | 4XX, 5XX                                                                | \*/\*                                                                   |