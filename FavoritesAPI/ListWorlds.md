# List Favorite Worlds (**BETA**)

This API allows you to list your favorite worlds

Max Favorites: 20

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/worlds/favorites

## Requires Authentication
Yes

## Returns 

Array of:

Field | Type | Description
------|------|------------
id | string | World ID
name | string | World Name
authorName | string | The name of the creator
totalLikes | int | How many likes this world has
totalVisits | int | How many visits this world has
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
