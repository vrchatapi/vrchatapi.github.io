# List Favorites 

!> This is BETA API and might not work as expected.

This API allows you to list all favorites

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/favorites/

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `TypeOptions` | Yes | The type

## Returns 

Array of:

Field | Type | Description
------|------|------------
id | string | Favorite ID
type | `TypeOptions` | The type added
favoriteId | string | The Object Id
tags | array | Unknown

### TypeOptions

It is assumed that once the favourite feature will be released the `user` type will be replaced with `friend` type.

    - world
    - friend
    - user