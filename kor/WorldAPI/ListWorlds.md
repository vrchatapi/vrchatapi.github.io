# List Worlds

This API allows you to list and search for worlds.

## Request Method 
GET

## Endpoint
Any World:
    https://api.vrchat.cloud/api/1/worlds

Only Active Worlds:
    https://api.vrchat.cloud/api/1/worlds/active

Only Recently Visited Worlds:
    https://api.vrchat.cloud/api/1/worlds/recent
    
Only Favorite Worlds:
    https://api.vrchat.cloud/api/1/worlds/favorites

    
    

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
featured | bool | yes | is the world featured
sort | `SortOptions` | yes | How to sort the worlds
user | string | yes | Set to `me` for searching own worlds
userId | string | yes | Filter by creator id, use `me` for only worlds owned by current user
n | int | yes | How many worlds to return
order | `OrderOptions` | yes | Result ordering
offset | int | yes | How many worlds to skip
search | string | yes | Filter by name
tag | Comma seperated strings | yes | Filter by tag
notag | Comma seperated strings | Tags to exclude 
releaseStatus | `ReleaseStatus` | yes | Filter by release status
maxUnityVersion | string | yes | Current unity version the game is using
minUnityVersion | string | yes | The min unity version the world support
maxAssetVersion | string | yes | Current asset version the game is using
minAssetVersion | string | yes | The min asset version the world support
platform | string | yes | The platform the world supports (usually standalonewindows)

Featured are set as:
    - sort=order, featured=true

Trending is set as:
    - sort=popularity, featured=false

### SortOptions

    - popularity
    - created
    - updated
    - order
    - _created_at
    - _updated_at
    
### OrderOptions
    - ascending
    - descending

## Returns 

Array of:

Field | Type | Description
------|------|------------
id | string | World ID
name | string | World name
authorName | string | The name of the creator
totalLikes | int | How many likes the world has
totalVisits | int | How many visits the world has
capacity | int | World player limit
imageUrl | string | URL to the image of the world
thumbnailImageURL | string | URL to the image of the world (small)
isSecure | boolean | unknown (probably password?)
releaseStatus | `ReleaseStatus` | The status of the world
organization | string | unknown
occupants | int | Total amount of people in this world

### ReleaseStatus

    - public
    - private 
    - all
    - hidden
