
# Add to Favorites

This API allows you to add a favourite of a world, friend or avatar.

Friend and Avatar can have up to 20 entires. World can have 32 entries

## Request Method
POST

## Endpoint
https://api.vrchat.cloud/api/1/favorites

## Requires Authentication
Yes (See [here](/Authorization.md) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `TypeOptions` | No | The type we are adding
favoriteId | string | No | The Object Id
tags | array | No | Group tag (if type = world, tags = ["worlds1"])

## Returns

Array of:

Field | Type | Description
------|------|------------
id | string | Favorite ID
type | `TypeOptions` | The favourite type
favoriteId | string | The Object Id
tags | array | Group tag (if type = avatar, tags = ["avatars1"])

### TypeOptions

    - world
    - friend
    - avatar
