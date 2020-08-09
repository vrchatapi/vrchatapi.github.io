# Verify

Finishes the login sequence for accounts with 2FactorAuth

## Request Method
POST

## Endpoint
https://api.vrchat.cloud/api/1/auth/twofactorauth/totp/verify For Two-Factor-Auth codes
https://api.vrchat.cloud/api/1/auth/twofactorauth/otp/verify For recovery codes

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Request requirements

This must be put in the BODY of the request and Content-Type must be application/json

Field | Type | Optional | Description
------|------|----------|------------
code | string | No | 2FactorAuth Code

## Returns

JSON with single key `verified` which will either be `true` or `false`, depending on whether it was successful.
