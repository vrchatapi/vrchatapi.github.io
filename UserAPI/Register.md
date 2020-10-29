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
recaptchaCode | string | No | Solution to presented reCaptcha
year | string | Yes | Birthday - Year
month | string | Yes | Birthday - Month
day | string | Yes | Birthday - Day
subscribe | boolean | Yes | If you subscribe to general vrchat emails
acceptedTOSVersion | string | Yes | Accepted ToS version (Current is ToS version is 6)

## Returns

[`Current User object`](/Objects/User.md#current-user-object)
