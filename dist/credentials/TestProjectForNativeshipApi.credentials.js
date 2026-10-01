"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestProjectForNativeshipApi = void 0;
class TestProjectForNativeshipApi {
    constructor() {
        this.name = "testProjectForNativeshipApi";
        this.displayName = "Test Project For Nativeship API";
        this.documentationUrl = "https://nativeship.io";
        this.icon = {
            light: "file:../nodes/TestProjectForNativeship/testProjectForNativeship.svg",
            dark: "file:../nodes/TestProjectForNativeship/testProjectForNativeship.dark.svg"
        };
        this.properties = [
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
        this.authenticate = {
            type: "generic",
            properties: {
                qs: {
                    key: "={{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://emailverifier.reoon.com/api/v1",
                url: "/check-account-balance/"
            }
        };
    }
}
exports.TestProjectForNativeshipApi = TestProjectForNativeshipApi;
//# sourceMappingURL=TestProjectForNativeshipApi.credentials.js.map