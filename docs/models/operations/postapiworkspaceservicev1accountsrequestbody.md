# PostApiWorkspaceServiceV1AccountsRequestBody

## Example Usage

```typescript
import { PostApiWorkspaceServiceV1AccountsRequestBody } from "oppulence-backend-sdk/models/operations";

let value: PostApiWorkspaceServiceV1AccountsRequestBody = {
  auth0UserId: "<id>",
  email: "Luis.Moen@hotmail.com",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `auth0UserId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `email`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `baseDirectory`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `region`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `orgId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tenantId`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `roles`                                                                  | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `permissions`                                                            | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `mfaEnabled`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `complianceLevel`                                                        | [operations.ComplianceLevel](../../models/operations/compliancelevel.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `preferences`                                                            | Record<string, *string*>                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |