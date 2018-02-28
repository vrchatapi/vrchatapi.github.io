# Update Info

Used to update user information such as the email and birthday.

This is probably also used when accepting new TOS.

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/users/:id

id - The current user id

## Requires Authentication
Yes

## Parameters

Field | Type | Optional? | Description
------|------|-----------|------------
email | string | yes | New Email
birthday | string | yes | New Birthday
acceptedTOSVersion | int |  unknown | The last accepted TOS version

## Returns

The new user data (same one as returned by the [Login](UserAPI/Login.md) Endpoint)