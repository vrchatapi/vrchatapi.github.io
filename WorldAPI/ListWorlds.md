# List Worlds

This API allows you to list and search for worlds.

## Request Method 
GET

## Endpoint
any world:
    https://api.vrchat.cloud/api/1/worlds

only active worlds"
    https://api.vrchat.cloud/api/1/worlds/active

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
featured | bool | yes | is the world featured
sort | `SortOptions` | yes | How to sort the worlds
user | `UserOptions` | yes | who the creator may be
userId | string | yes | Filter by creator id
n | int | yes | How many users to return
offset | int | yes | How many users to skip
search | string | yes | Filter by name
tag | Comma seperated strings | yes | Filter by tag
notag | Comma seperated strings | Tags to exclude 
releaseStatus | `ReleaseStatus` | yes | Filter by release status
maxUnityVersion | string | yes | The max unity version the world support
minUnityVersion | string | yes | The min unity version the world support
maxAssetVersion | string | yes | The max asset version the world support
minAssetVersion | string | yes | The min asset version the world support
platform | string | yes | The platform the world support

Featured are set as:
    - sort=order, featured=true

Trending is set as:
    - sort=popularity, featured=false

### UserOptions

    - me
    - friends

### SortOptions

    - popularity
    - created
    - updated
    - order
    - _created_at
    - _updated_at

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