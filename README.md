# oppulence-backend-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *oppulence-backend-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=oppulence-backend-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/oppulence-backend/oppulence). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [oppulence-backend-sdk](#oppulence-backend-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add oppulence-backend-sdk
```

### PNPM

```bash
pnpm add oppulence-backend-sdk
```

### Bun

```bash
bun add oppulence-backend-sdk
```

### Yarn

```bash
yarn add oppulence-backend-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "OppulenceBackendSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "oppulence-backend-sdk",
        "--",
        "mcp", "start"
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Go to `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

- Name: OppulenceBackendSDK
- Type: `command`
- Command:
```sh
npx -y --package oppulence-backend-sdk -- mcp start 
```

</details>

For a full list of server arguments, run:

```sh
npx -y --package oppulence-backend-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.accounts.register({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [register](docs/sdks/accounts/README.md#register) - Create a new account
* [list](docs/sdks/accounts/README.md#list) - List all accounts
* [updateSettings](docs/sdks/accounts/README.md#updatesettings) - Update account settings
* [modifyDetails](docs/sdks/accounts/README.md#modifydetails) - Update account details
* [fetchById](docs/sdks/accounts/README.md#fetchbyid) - Get account details
* [removeById](docs/sdks/accounts/README.md#removebyid) - Delete account
* [getUsage](docs/sdks/accounts/README.md#getusage) - Get account usage
* [create](docs/sdks/accounts/README.md#create) - Create a new account
* [update](docs/sdks/accounts/README.md#update) - Update account details
* [get](docs/sdks/accounts/README.md#get) - Get account details
* [delete](docs/sdks/accounts/README.md#delete) - Delete account

### [apiKeys](docs/sdks/apikeys/README.md)

* [create](docs/sdks/apikeys/README.md#create) - Create a new API key
* [update](docs/sdks/apikeys/README.md#update) - Update API key
* [list](docs/sdks/apikeys/README.md#list) - List API keys
* [rotate](docs/sdks/apikeys/README.md#rotate) - Rotate API key
* [get](docs/sdks/apikeys/README.md#get) - Get API key details
* [delete](docs/sdks/apikeys/README.md#delete) - Delete API key
* [getTenantDetails](docs/sdks/apikeys/README.md#gettenantdetails) - Get tenant API key details

### [jobs](docs/sdks/jobs/README.md)

* [getAll](docs/sdks/jobs/README.md#getall) - Get all jobs
* [create](docs/sdks/jobs/README.md#create) - Create a new job scraping task
* [get](docs/sdks/jobs/README.md#get) - Get a specific job
* [delete](docs/sdks/jobs/README.md#delete) - Delete a specific job
* [download](docs/sdks/jobs/README.md#download) - Download job results as CSV

### [leads](docs/sdks/leads/README.md)

* [list](docs/sdks/leads/README.md#list) - List leads
* [get](docs/sdks/leads/README.md#get) - Get lead details


### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - List all organizations
* [create](docs/sdks/organizations/README.md#create) - Create a new organization
* [update](docs/sdks/organizations/README.md#update) - Update organization details
* [get](docs/sdks/organizations/README.md#get) - Get organization details
* [delete](docs/sdks/organizations/README.md#delete) - Delete an organization

### [tenantApiKeys](docs/sdks/tenantapikeys/README.md)

* [create](docs/sdks/tenantapikeys/README.md#create) - Create a new tenant API key
* [update](docs/sdks/tenantapikeys/README.md#update) - Update tenant API key

### [tenants](docs/sdks/tenants/README.md)

* [list](docs/sdks/tenants/README.md#list) - List all tenants
* [delete](docs/sdks/tenants/README.md#delete) - Delete a tenant
* [update](docs/sdks/tenants/README.md#update) - Update tenant details
* [listApiKeys](docs/sdks/tenants/README.md#listapikeys) - List tenant API keys
* [rotateApiKey](docs/sdks/tenants/README.md#rotateapikey) - Rotate tenant API key
* [deleteApiKey](docs/sdks/tenants/README.md#deleteapikey) - Delete tenant API key
* [get](docs/sdks/tenants/README.md#get) - Get tenant details
* [create](docs/sdks/tenants/README.md#create) - Create a new tenant

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create webhook
* [update](docs/sdks/webhooks/README.md#update) - Update webhook
* [get](docs/sdks/webhooks/README.md#get) - Get webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete webhook

### [workflows](docs/sdks/workflows/README.md)

* [update](docs/sdks/workflows/README.md#update) - Update workflow details
* [get](docs/sdks/workflows/README.md#get) - Get workflow details
* [delete](docs/sdks/workflows/README.md#delete) - Delete workflow
* [pause](docs/sdks/workflows/README.md#pause) - Pause workflow execution
* [trigger](docs/sdks/workflows/README.md#trigger) - Trigger workflow execution

### [workspaces](docs/sdks/workspaces/README.md)

* [update](docs/sdks/workspaces/README.md#update) - Update workspace details
* [fetchById](docs/sdks/workspaces/README.md#fetchbyid) - Get workspace details
* [removeById](docs/sdks/workspaces/README.md#removebyid) - Delete a workspace
* [list](docs/sdks/workspaces/README.md#list) - List workspaces
* [create](docs/sdks/workspaces/README.md#create) - Create a new workspace
* [fetchAnalytics](docs/sdks/workspaces/README.md#fetchanalytics) - Get workspace analytics
* [listWorkflows](docs/sdks/workspaces/README.md#listworkflows) - List workflows
* [createWorkflow](docs/sdks/workspaces/README.md#createworkflow) - Create a new workflow
* [generate](docs/sdks/workspaces/README.md#generate) - Create workspace
* [modify](docs/sdks/workspaces/README.md#modify) - Update workspace
* [getAnalytics](docs/sdks/workspaces/README.md#getanalytics) - Get workspace analytics
* [getComplianceReport](docs/sdks/workspaces/README.md#getcompliancereport) - Get compliance report
* [retrieveList](docs/sdks/workspaces/README.md#retrievelist) - List workspaces
* [listSharings](docs/sdks/workspaces/README.md#listsharings) - List workspace sharings
* [getStorageStats](docs/sdks/workspaces/README.md#getstoragestats) - Get storage statistics
* [get](docs/sdks/workspaces/README.md#get) - Get workspace details
* [delete](docs/sdks/workspaces/README.md#delete) - Delete workspace
* [share](docs/sdks/workspaces/README.md#share) - Share workspace

### [workspaceSharings](docs/sdks/workspacesharings/README.md)

* [update](docs/sdks/workspacesharings/README.md#update) - Update workspace sharing
* [delete](docs/sdks/workspacesharings/README.md#delete) - Remove workspace sharing

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsCreate`](docs/sdks/accounts/README.md#create) - Create a new account
- [`accountsDelete`](docs/sdks/accounts/README.md#delete) - Delete account
- [`accountsFetchById`](docs/sdks/accounts/README.md#fetchbyid) - Get account details
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Get account details
- [`accountsGetUsage`](docs/sdks/accounts/README.md#getusage) - Get account usage
- [`accountsList`](docs/sdks/accounts/README.md#list) - List all accounts
- [`accountsModifyDetails`](docs/sdks/accounts/README.md#modifydetails) - Update account details
- [`accountsRegister`](docs/sdks/accounts/README.md#register) - Create a new account
- [`accountsRemoveById`](docs/sdks/accounts/README.md#removebyid) - Delete account
- [`accountsUpdate`](docs/sdks/accounts/README.md#update) - Update account details
- [`accountsUpdateSettings`](docs/sdks/accounts/README.md#updatesettings) - Update account settings
- [`apiKeysCreate`](docs/sdks/apikeys/README.md#create) - Create a new API key
- [`apiKeysDelete`](docs/sdks/apikeys/README.md#delete) - Delete API key
- [`apiKeysGet`](docs/sdks/apikeys/README.md#get) - Get API key details
- [`apiKeysGetTenantDetails`](docs/sdks/apikeys/README.md#gettenantdetails) - Get tenant API key details
- [`apiKeysList`](docs/sdks/apikeys/README.md#list) - List API keys
- [`apiKeysRotate`](docs/sdks/apikeys/README.md#rotate) - Rotate API key
- [`apiKeysUpdate`](docs/sdks/apikeys/README.md#update) - Update API key
- [`jobsCreate`](docs/sdks/jobs/README.md#create) - Create a new job scraping task
- [`jobsDelete`](docs/sdks/jobs/README.md#delete) - Delete a specific job
- [`jobsDownload`](docs/sdks/jobs/README.md#download) - Download job results as CSV
- [`jobsGet`](docs/sdks/jobs/README.md#get) - Get a specific job
- [`jobsGetAll`](docs/sdks/jobs/README.md#getall) - Get all jobs
- [`leadsGet`](docs/sdks/leads/README.md#get) - Get lead details
- [`leadsList`](docs/sdks/leads/README.md#list) - List leads
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create a new organization
- [`organizationsDelete`](docs/sdks/organizations/README.md#delete) - Delete an organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get organization details
- [`organizationsList`](docs/sdks/organizations/README.md#list) - List all organizations
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update organization details
- [`tenantApiKeysCreate`](docs/sdks/tenantapikeys/README.md#create) - Create a new tenant API key
- [`tenantApiKeysUpdate`](docs/sdks/tenantapikeys/README.md#update) - Update tenant API key
- [`tenantsCreate`](docs/sdks/tenants/README.md#create) - Create a new tenant
- [`tenantsDelete`](docs/sdks/tenants/README.md#delete) - Delete a tenant
- [`tenantsDeleteApiKey`](docs/sdks/tenants/README.md#deleteapikey) - Delete tenant API key
- [`tenantsGet`](docs/sdks/tenants/README.md#get) - Get tenant details
- [`tenantsList`](docs/sdks/tenants/README.md#list) - List all tenants
- [`tenantsListApiKeys`](docs/sdks/tenants/README.md#listapikeys) - List tenant API keys
- [`tenantsRotateApiKey`](docs/sdks/tenants/README.md#rotateapikey) - Rotate tenant API key
- [`tenantsUpdate`](docs/sdks/tenants/README.md#update) - Update tenant details
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update webhook
- [`workflowsDelete`](docs/sdks/workflows/README.md#delete) - Delete workflow
- [`workflowsGet`](docs/sdks/workflows/README.md#get) - Get workflow details
- [`workflowsPause`](docs/sdks/workflows/README.md#pause) - Pause workflow execution
- [`workflowsTrigger`](docs/sdks/workflows/README.md#trigger) - Trigger workflow execution
- [`workflowsUpdate`](docs/sdks/workflows/README.md#update) - Update workflow details
- [`workspacesCreate`](docs/sdks/workspaces/README.md#create) - Create a new workspace
- [`workspacesCreateWorkflow`](docs/sdks/workspaces/README.md#createworkflow) - Create a new workflow
- [`workspacesDelete`](docs/sdks/workspaces/README.md#delete) - Delete workspace
- [`workspacesFetchAnalytics`](docs/sdks/workspaces/README.md#fetchanalytics) - Get workspace analytics
- [`workspacesFetchById`](docs/sdks/workspaces/README.md#fetchbyid) - Get workspace details
- [`workspacesGenerate`](docs/sdks/workspaces/README.md#generate) - Create workspace
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Get workspace details
- [`workspacesGetAnalytics`](docs/sdks/workspaces/README.md#getanalytics) - Get workspace analytics
- [`workspacesGetComplianceReport`](docs/sdks/workspaces/README.md#getcompliancereport) - Get compliance report
- [`workspacesGetStorageStats`](docs/sdks/workspaces/README.md#getstoragestats) - Get storage statistics
- [`workspaceSharingsDelete`](docs/sdks/workspacesharings/README.md#delete) - Remove workspace sharing
- [`workspaceSharingsUpdate`](docs/sdks/workspacesharings/README.md#update) - Update workspace sharing
- [`workspacesList`](docs/sdks/workspaces/README.md#list) - List workspaces
- [`workspacesListSharings`](docs/sdks/workspaces/README.md#listsharings) - List workspace sharings
- [`workspacesListWorkflows`](docs/sdks/workspaces/README.md#listworkflows) - List workflows
- [`workspacesModify`](docs/sdks/workspaces/README.md#modify) - Update workspace
- [`workspacesRemoveById`](docs/sdks/workspaces/README.md#removebyid) - Delete a workspace
- [`workspacesRetrieveList`](docs/sdks/workspaces/README.md#retrievelist) - List workspaces
- [`workspacesShare`](docs/sdks/workspaces/README.md#share) - Share workspace
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update workspace details

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  const result = await oppulenceBackendSDK.accounts.register({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await oppulenceBackendSDK.accounts.register({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `register` method may throw the following errors:

| Error Type                                                      | Status Code | Content Type     |
| --------------------------------------------------------------- | ----------- | ---------------- |
| errors.PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse | 400         | application/json |
| errors.APIError                                                 | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";
import {
  PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse,
  SDKValidationError,
} from "oppulence-backend-sdk/models/errors";

const oppulenceBackendSDK = new OppulenceBackendSDK();

async function run() {
  let result;
  try {
    result = await oppulenceBackendSDK.accounts.register({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err
        instanceof PostApiLeadScraperMicroserviceApiV1AccountsErrorResponse): {
        // Handle err.data$: PostApiLeadScraperMicroserviceApiV1AccountsErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const oppulenceBackendSDK = new OppulenceBackendSDK({
  serverURL: "https://159.89.234.169/v1/gateway",
});

async function run() {
  const result = await oppulenceBackendSDK.accounts.register({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";
import { HTTPClient } from "oppulence-backend-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new OppulenceBackendSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { OppulenceBackendSDK } from "oppulence-backend-sdk";

const sdk = new OppulenceBackendSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `OPPULENCEBACKENDSDK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=oppulence-backend-sdk&utm_campaign=typescript)
