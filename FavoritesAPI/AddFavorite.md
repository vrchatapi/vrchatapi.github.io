
# Add to Favorites

?> For Beta Client `2018.1.3_openbeta` build 563

This API allows you to add a favourite of a world, friend or avatar.
Friend and Avatar can have up to 20 entires. World can have 32 entries

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
type | `TypeOptions` | The favourite type
favoriteId | string | The Object Id
tags | array | Unknown

### TypeOptions

    - world
    - friend
    - avatar
