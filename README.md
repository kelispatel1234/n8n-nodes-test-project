# test project for nativeship n8n community node

this project is for test

Generated from OpenAPI 1.0.0 with template 1.1.0. Generated files are platform-managed and will be overwritten during regeneration.

## Authentication

Configure the generated API key credential in n8n before using the node.

## Supported operations

- `GET /check-account-balance/` - Check remaining credits
  - Retry Contract: none
  - Pagination Contract: none
- `POST /create-bulk-verification-task/` - Create a bulk verification task
  - Retry Contract: none
  - Pagination Contract: none
- `GET /get-result-bulk-verification-task/` - Get bulk task progress or results
  - Retry Contract: none
  - Pagination Contract: none
- `GET /verify` - Verify one email
  - Retry Contract: none
  - Pagination Contract: none

## Usage

1. Install this community-node package in n8n.
2. Add the **test project for nativeship** node to a workflow.
3. Select a resource and operation, configure its parameters, and execute the workflow.

## Example workflow

Connect **Manual Trigger** -> **test project for nativeship** -> a destination node, select an operation, then run the workflow and inspect the returned items.

## Development

```sh
npm install
npm run build
npm run lint
npm run dev
```

`npm run dev` starts a local n8n development instance. Find the integration by its **test project for nativeship** display name.
