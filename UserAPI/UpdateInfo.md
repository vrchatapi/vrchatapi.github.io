# Update Info

Used to update user information such as the email and birthday.

This is probably also used when accepting new TOS.

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/users/&lt;ID&gt;

id - The current user id

## Requires Authentication
Yes

## Parameters

Field | Type | Optional? | Description
------|------|-----------|------------
email | string | yes | New Email
birthday | string | yes | New Birthday
acceptedTOSVersion | int |  yes | The last accepted TOS version
tags | string or array of strings | yes | change the tags
networkSessionId | string | yes |  Sets the network session id of the user, the session id is probably from Photon

## Returns

The new user data (same one as returned by the [Login](UserAPI/Login.md) Endpoint)