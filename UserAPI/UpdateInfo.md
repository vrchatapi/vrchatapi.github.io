# Update Info

Used to update user information such as the email and birthday.

This is probably also used when accepting new TOS.

## Request Method
PUT

## Endpoint
    https://api.vrchat.cloud/api/1/users/[ID]

id - The current user id

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Parameters

Field | Type | Optional? | Description
------|------|-----------|------------
email | string | yes | New Email
birthday | string | yes | New Birthday
acceptedTOSVersion | int |  yes | The last accepted TOS version
tags | string or array of strings | yes | change the tags
networkSessionId | string | yes |  Sets the network session id of the user, the session id is from Photon
status | `Status` | yes | change the status
statusDescription | String | yes | change message seen ingame.
bio | String | yes | Information about you.
bioLinks | Array | yes | Links.

### Status

    - active  (User can see requests)
    - join me (User autoaccepts requests)
    - busy (User ignores all requests)
    - offline

## Returns

[`Current User object`](/Objects/User.md#current-user-object)
