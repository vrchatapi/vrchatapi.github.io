# Get Favorite 

This API allows you to get information about a specific favorite.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/favorites/[ID]

ID - The Favorite Id

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
id | string | Favorite ID
type | `TypeOptions` | The favourite type
favoriteId | string | The Object Id
tags | array | Unknown

### TypeOptions

    - world
    - friend
    - avatar
