# Current User Details

Login and/or Get user data from your VRChat account.

If `Authorization` header is present then a new login session will be generated, and a new `auth` cookie is returned.

**WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie whenever you can, and avoid sending the Authorization header unless strictly neccesary. While the exact number of simultaneous open sessions is secret, expect to **very fast** run into the rate-limit and be temporarily blocked from making new sessions until the old ones expire.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

[`Current User object`](/Objects/User.md#current-user-object)
