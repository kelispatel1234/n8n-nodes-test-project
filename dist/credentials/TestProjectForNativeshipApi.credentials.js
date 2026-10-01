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
                displayName: "Access Token",
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
                headers: {
                    Authorization: "=Bearer {{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://trustmrr.com/api/v1",
                url: "/startups"
            }
        };
    }
}
exports.TestProjectForNativeshipApi = TestProjectForNativeshipApi;
//# sourceMappingURL=TestProjectForNativeshipApi.credentials.js.map