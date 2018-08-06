# Search

This API allows you to list users and use some filters to filter them

## Request Method 
GET

## Endpoint
All users 
    https://api.vrchat.cloud/api/1/users

Active only
    https://api.vrchat.cloud/api/1/users/active

## Requires Authentication
Yes

# Parameter

Field | Type | Optional | Description
------|------|----------|------------
search | string | yes | Username to search for
developerType | `DeveloperType` | yes | Active user by developer type, `none` for normal users and `internal` for moderators
n | int | yes | How many users to return
offset | int | yes | How many users to skip

## Returns 

array of users

Field | Type | Description
------|------|------------
id | string | the user id
username | string | the login name
displayName | string | the display name
currentAvatarImageUrl | string | url to the avatar preview
currentAvatarThumbnailImageUrl | string | url to the avatar thumbnail
tags | array of `Permission` | The permissions the user has. 
developerType | `DeveloperType` | the user type

!> Location is only shown for friends now

### DeveloperType

    - none
    - trusted
    - internal
    - moderator 
