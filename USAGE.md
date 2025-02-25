<!-- Start SDK Example Usage [usage] -->
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