# Get Favorite 

?> For Beta Client `2018.1.3_openbeta` build 563

This API allows you to get information about a specific favorite.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/favorites/:id

id - The Favorite Id

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
