/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Accounts } from "./accounts.js";
import { ApiKeys } from "./apikeys.js";
import { Jobs } from "./jobs.js";
import { Leads } from "./leads.js";
import { Organizations } from "./organizations.js";
import { TenantApiKeys } from "./tenantapikeys.js";
import { Tenants } from "./tenants.js";
import { Webhooks } from "./webhooks.js";
import { Workflows } from "./workflows.js";
import { Workspaces } from "./workspaces.js";
import { WorkspaceSharings } from "./workspacesharings.js";

export class OppulenceBackendSDK extends ClientSDK {
  private _accounts?: Accounts;
  get accounts(): Accounts {
    return (this._accounts ??= new Accounts(this._options));
  }

  private _apiKeys?: ApiKeys;
  get apiKeys(): ApiKeys {
    return (this._apiKeys ??= new ApiKeys(this._options));
  }

  private _jobs?: Jobs;
  get jobs(): Jobs {
    return (this._jobs ??= new Jobs(this._options));
  }

  private _leads?: Leads;
  get leads(): Leads {
    return (this._leads ??= new Leads(this._options));
  }

  private _organizations?: Organizations;
  get organizations(): Organizations {
    return (this._organizations ??= new Organizations(this._options));
  }

  private _tenants?: Tenants;
  get tenants(): Tenants {
    return (this._tenants ??= new Tenants(this._options));
  }

  private _tenantApiKeys?: TenantApiKeys;
  get tenantApiKeys(): TenantApiKeys {
    return (this._tenantApiKeys ??= new TenantApiKeys(this._options));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  private _workspaces?: Workspaces;
  get workspaces(): Workspaces {
    return (this._workspaces ??= new Workspaces(this._options));
  }

  private _workflows?: Workflows;
  get workflows(): Workflows {
    return (this._workflows ??= new Workflows(this._options));
  }

  private _workspaceSharings?: WorkspaceSharings;
  get workspaceSharings(): WorkspaceSharings {
    return (this._workspaceSharings ??= new WorkspaceSharings(this._options));
  }
}
