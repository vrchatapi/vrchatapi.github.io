# Get Favorite 

!> This is BETA API and might not work as expected.

This API allows you to get information about a favorite

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
type | `TypeOptions` | The type added
favoriteId | string | The Object Id
tags | array | Unknown

### TypeOptions

    - world
    - friend
    - avatar
