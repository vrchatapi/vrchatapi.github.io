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
type | `TypeOptions` | Yes | The favorite type
n | Integer | Yes | Max number of objects to return (<= 100)
offset | Integer | Yes | Skip offset objects from the start (used for paging!)

## Returns

Array of:

Field | Type | Description
------|------|------------
id | string | Favorite ID
type | `TypeOptions` | The type of the favorite
favoriteId | string | The Object Id
tags | array | Is only 1 string value that is the name of the favorite group

### TypeOptions

    - world
    - friend
    - avatar
