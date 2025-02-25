# GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdData

## Example Usage

```typescript
import { GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdData } from "oppulence-backend-sdk/models/operations";

let value: GetApiWorkspaceServiceV1WorkspacesComplianceReportWorkspaceIdData =
  {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `overallScore`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `complianceStatus`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `violations`                                                                                  | [operations.Violations](../../models/operations/violations.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `categoryScores`                                                                              | [operations.CategoryScores](../../models/operations/categoryscores.md)[]                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reportGeneratedAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `certificationId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |