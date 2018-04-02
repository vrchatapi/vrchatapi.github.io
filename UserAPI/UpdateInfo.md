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
acceptedTOSVersion | int |  yes | The last accepted TOS version
tags | string or array of strings | yes | change the tags
## Returns

The new user data (same one as returned by the [Login](UserAPI/Login.md) Endpoint)

## Tags
Tags are probably ways to add some special permissions/properties to users in VRChat, right now the known tags are:

    - admin_moderator
    - admin_scripting_access

Also, you can add tags to yourself, but it will not add anything starting with `admin_`