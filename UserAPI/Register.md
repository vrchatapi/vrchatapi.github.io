# Register

This API allows you to register new users.

## Request Method
POST

## Endpoint
    https://api.vrchat.cloud/api/1/auth/register

## Requires Authentication
No

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
username | string | No | The new username
password | string | No | The new password
email | string | No | The new email
birthday | string | Yes | The birthday
acceptedTOSVersion | string | Yes | accepted ToS version

## Returns

[`Current User object`](Objects/User.md?id=current-user-object)
