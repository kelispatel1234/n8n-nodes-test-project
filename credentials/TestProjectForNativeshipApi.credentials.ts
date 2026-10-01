import { type IAuthenticateGeneric, type Icon, type ICredentialTestRequest, type ICredentialType, type INodeProperties } from "n8n-workflow";

// Generated with ts-morph
export class TestProjectForNativeshipApi implements ICredentialType {
  name = "testProjectForNativeshipApi";
  displayName = "Test Project For Nativeship API";
  documentationUrl = "https://nativeship.io";
  icon: Icon = {
        light: "file:../nodes/TestProjectForNativeship/testProjectForNativeship.svg",
        dark: "file:../nodes/TestProjectForNativeship/testProjectForNativeship.dark.svg"
    };
  properties: INodeProperties[] = [
        {
            displayName: "key",
            name: "secret",
            type: "string",
            typeOptions: {
                password: true
            },
            default: "",
            required: true
        }
    ];
  authenticate: IAuthenticateGeneric = {
        type: "generic",
        properties: {
            qs: {
                key: "={{$credentials.secret}}"
            }
        }
    };
  test: ICredentialTestRequest = {
        request: {
            baseURL: "https://emailverifier.reoon.com/api/v1",
            url: "/check-account-balance/"
        }
    };
}
