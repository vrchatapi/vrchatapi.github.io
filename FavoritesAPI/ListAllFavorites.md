# List Favorites

This API allows you to list all the current user's favorites.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/favorites/

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `TypeOptions` | Yes | The favourite type

## Returns

Array of:

Field | Type | Description
------|------|------------
id | string | Favorite ID
type | `TypeOptions` | The type of the favourite
favoriteId | string | The Object Id
tags | array | Unknown

### TypeOptions

It is assumed that once the favourite feature will be released the `user` type will be replaced with `friend` type.

    - world
    - friend
    - avatar
