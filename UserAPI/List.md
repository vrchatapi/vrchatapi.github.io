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
developerType | `DeveloperType` | the user type
location | `WorldLocation` | the world the user is currently in

### DeveloperType

    - none
    - trusted
    - internal
    - moderator 

### WorldLocation

If the user is not connected it will be `offline`

If the user is online the location will be serialized as  `world_id:instance_id`

Sometimes the `instance_id` is set to the user id of that user, probably meaning this is some private instance.

there could also be a `~` that can have some info about the world instance, these are the ones I found

    - hidden(user_id)
    - friend
    - nonce(HEX)

Sometimes the location is set to `private`, probably meaning he is in a private world, will have to investigate.

