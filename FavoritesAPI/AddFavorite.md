**!> This is BETA API and might not work as expected.**

# Add to Favorites

This API allows you to add a world or user to your favorite list.

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/favorites

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `TypeOptions` | No | The type we are adding
favoriteId | string | No | The Object Id


## Returns 

Array of:

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
