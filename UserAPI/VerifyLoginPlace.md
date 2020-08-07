# VerifyLoginPlace

Verifies your logon location and that it was you.
This endpoint isn't meant to be programmatically accessed, so returns may not be formatted in JSON

## Request Method
GET

## Endpoint
https://vrchat.com/api/1/auth/verifyLoginPlace

## Requires Authentication
No

## Parameters

All keys are required.

Key | Type | Description
userId | string | User ID of the user verifying their login
placeCode | string | Region code of login location
token | string | Unique identifier
