# Get By Name

This API allows you to get public user info about a specific user using his name

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/users/&lt;USERNAME&gt;/name

USERNAME - the user 's ingame name

## Requires Authentication
Yes


## Returns 

!> You will only get the `location`, `worldId` and `instanceId` fields if the user is your friend!

Field | Type | Description
------|------|------------
id | string | the user id
username | string | the login name
displayName | string | the display name
currentAvatarImageUrl | string | url to the avatar preview
currentAvatarThumbnailImageUrl | string | url to the avatar thumbnail
developerType | `DeveloperType` | the user type
tags | array of string | the user's tags
status | string | TODO
statusDescription | string | TODO
location | `WorldLocation` | the world the user is currently in. Friends Only
worldId | string | The world id, could be `offline`. Friends Only
instanceId | string | The instance id, could be `offline`. Friends Only

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