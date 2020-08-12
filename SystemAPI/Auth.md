# Auth

Verifies whether api token is valid.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth

## Requires Authentication
Yes (See [here](Authorization.md) for details), must be with auth cookie!

## Returns

Field | Type | Description
------|------|------------
ok | boolean | Whether or not cookie is valid
token | string | The auth cookie
