```diff
! Special types are listed separately below relevant objects in this file.
```

# Objects

## User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user
bioLinks | array | Array of URLs (strings) user has added to their account
state | `State` | Current state of user, only returns if isFriend is true
status | `Status` | Current status of user, only returns if isFriend is true
statusDescription | string | Custom status message of user
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_login | string | Time and date user last logged in
last_platform | string | Last platform of VRChat that user logged in from
allowAvatarCopying | boolean | If user has allowed cloning of public avatars they are using
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | `DeveloperType` | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)
friendKey | string | Key that probably identifies you as their friend if you have it, or an empty string if isFriend is false
location | `Location` | `Location` type, offline if user is offline or an empty string if isFriend is false
worldId | string | World ID of world user is in, offline if user is offline or empty string if isFriend is false
instanceId | string | Instance ID of instance, with accesstag(id) and nonce(key) if not public, offline if user is offline or empty string if isFriend is false. More details below

## Limited User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user, set on the VRChat website
status | `Status` | Current status of user
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_platform | string | Last platform of VRChat that user logged in from
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | `DeveloperType` | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)

# Special type

## State type

State is a string, being of one of the following:

 - "online" User is online in VRChat
 - "active" User is online, but not in VRChat
 - "offline" User is offline

## Status type

Status is a string, being one of the following:

 - "active" User can see requests
 - "join me" User auto-accepts requests
 - "ask me" People can't see user's location, but they can see requests
 - "busy" User auto-declines requests
 - "offline" User is offline

## DeveloperType

DeveloperType is a string, being of the following:

 - "none" User is not a developer
 - "trusted" Unknown
 - "internal" Is a VRChat developer
 - "moderator" Is a VRChat moderator

## Location

Location is a string made up of possibly multiple parts.
The first part is always "worldId:instanceId", and other parts are joined using "~" as a separator

Other parts are:

 - "hidden(userId)" Accesstag of instance
 - "nonce(key)" Cryptographic key to secure instance (a.k.a. nonce)
