# List World Favorites 

?> For Beta Client `2018.2.3_openbeta`

This API allows you to list the current user's world favorites.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/worlds/favorites

## Requires Authentication
Yes

## Returns 

Array of limited world objects:

Field | Type | Description
------|------|------------
id | string | Worldid
name | string | World name
authorName | string | World's author
totalLikes | int | Total upvotes from feedback
totalVisits | int | Total visits to this world
capacity | int | Total capacity
imageUrl | string | Image url
thumbnailImageUrl | string | Image url
isSecure | bool | is the world secure?
releaseStatus | string | Releasestatus
organization | string | Which company released this?
occupants | int | Current inhabitants.