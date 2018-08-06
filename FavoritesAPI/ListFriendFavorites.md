# List Friend Favorites 

?> For Beta Client `2018.2.3_openbeta`

This API allows you to list all the current user's friend favorites.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/friends/favorite

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
tag | `TagOptions` | no | The tag group to fetch

## Returns 

Array of:

Field | Type | Description
------|------|------------
id | string | the user id
username | string | the login name
displayName | string | the display name
currentAvatarImageUrl | string | url to the avatar preview
currentAvatarThumbnailImageUrl | string | url to the avatar thumbnail
developerType | `DeveloperType` | the user type
tags | array of string | the user's tags
status | `Status` | The status the user set.
statusDescription | string | Custom message from the user.
location | `WorldLocation` | the world the user is currently in. Friends Only
worldId | string | The world id, could be `offline`. Friends Only
instanceId | string | The instance id, could be `offline`. Friends Only

### TagOptions

    - group_0
    - group_1
    - group_2

### Status

    - active  (User can see requests)
    - join me (User autoaccepts requests)
    - busy (User ignores all requests)
    - offline
