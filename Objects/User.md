# Objects

## Current User object

| Field                          | Type              | Description                                                                                              |
|--------------------------------|-------------------|----------------------------------------------------------------------------------------------------------|
| acceptedTOSVersion             | Integer           | Version of VRChat TOS that has been accepted                                                             |
| accountDeletionData?           | ?string           | Date account is scheduled for deletion                                                                   |
| activeFriends                  | Array of strings  | Each string is a user's ID                                                                               |
| allowAvatarCopying             | Boolean           | If user is allowing public avatars to be copied from them in-game                                        |
| bio                            | String            | User defined biography                                                                                   |
| bioLinks                       | Array of strings  | User defined links                                                                                       |
| currentAvatar                  | String            | ID of current avatar                                                                                     |
| currentAvatarAssetURL          | String            | URL of current avatar's .vrca file                                                                       |
| currentAvatarImageUrl          | String            | URL of current avatar's display image                                                                    |
| currentAvatarThumbnailImageUrl | String            | URL of current avatar's thumbnail image                                                                  |
| date_joined                    | String            | Date user made the VRChat account; format YYYY-MM-DD                                                     |
| developerType                  | String            | Type of developer the user is                                                                            |
| displayName                    | String            | User's current displayed name                                                                            |
| email                          | String            | User's email                                                                                             |
| emailVerified                  | Boolean           | If user's email has been verified                                                                        |
| fallbackAvatar                 | String            | ID of fallback avatar                                                                                    |
| feature                        | Array of features | TODO                                                                                                     |
| friendGroupNames               | Array of strings  | Each string is a user-defined group name, used to categorize friends                                     |
| friendKey                      | String            | User's friend key, probably used in backend to track friends                                             |
| friends                        | Array of strings  | Each string is a user ID                                                                                 |
| hasBirthday                    | Boolean           | If user has defined their birthday                                                                       |
| hasEmail                       | Boolean           | If user has an email                                                                                     |
| hasLoggedInFromClient          | Boolean           | If user has logged in from the game-client (steam, oculus, etc)                                          |
| hasPendingEmail                | Boolean           | If user has a pending (not verified) email                                                               |
| homeLocation                   | String            | ID of user's home world                                                                                  |
| id                             | String            | User's ID                                                                                                |
| isFriend                       | Boolean           | If logged in user and this user are friends                                                              |
| last_login                     | String            | Date-time of last client login; format YYYY-MM-DDTHH:mm:SSZ                                              |
| last_platform                  | String            | Name for last client platform the user logged in on                                                      |
| obfuscatedEmail                | String            | User's email, but obfuscated                                                                             |
| obfuscatedPendingEmail         | String            | User's pending email, but obfuscated                                                                     |
| oculusId                       | String            | ID of oculus account                                                                                     |
| offlineFriends                 | Array of strings  | Each string is a user ID, all users are offline                                                          |
| onlineFriends                  | Array of strings  | Each string is a user ID, all users are online in-game                                                   |
| pastDisplayNames               | Array of strings  | Each string is a user's past display name                                                                |
| state                          | String            | TODO                                                                                                     |
| status                         | String            | TODO                                                                                                     |
| statusDescription              | String            | User defined status                                                                                      |
| steamDetails                   | JSONArray         | Details about user's steam account                                                                       |
| steamId                        | String            | ID of steam account                                                                                      |
| tags                           | Array of strings  | Each string is a tag given by developers or the game, usually denoting things like trust and permissions |
| twoFactorAuthEnabled           | Boolean           | If user has 2fa enabled                                                                                  |
| unsubscribe                    | Boolean           | If user has unsubscribed from VRChat emails                                                              |
| userIcon                       | String            | URL to image file used as user's icon                                                                    |
| username                       | String            | User's login name                                                                                        |

## User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user
bioLinks | array | Array of URLs (strings) user has added to their account
userIcon | string | Not implemented yet (vrc+)
state | [`State`](/Objects/User.md#state) | Current state of user, only returns if isFriend is true
status | [`Status`](/Objects/User.md#status) | Current status of user, only returns if isFriend is true
statusDescription | string | Custom status message of user
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_login | string | Time and date user last logged in
last_platform | string | Last platform of VRChat that user logged in from
allowAvatarCopying | boolean | If user has allowed cloning of public avatars they are using
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | [`DeveloperType`](/Objects/User.md#developertype) | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)
friendKey | string | Key that probably identifies you as their friend if you have it, or an empty string if isFriend is false
location | [`Location`](/Objects/World.md#location) | Type of instance user is in. Offline if user is offline or an empty string if isFriend is false
worldId | string | World ID of world user is in, offline if user is offline or empty string if isFriend is false
instanceId | [`Location`](/Objects/World.md#location) | Instance location with no worldId (combination of instanceName, [`instanceType`](/Objects/World.md#instance-type) and [`nonce`](/Objects/World.md#nonce)). Offline if user is offline or empty string if isFriend is false.

## Limited User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user, set on the VRChat website
status | [`Status`](/Objects/User.md#status) | Current status of user, only returns if isFriend is true
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_platform | string | Last platform of VRChat that user logged in from
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | [`DeveloperType`](/Objects/User.md#developertype) | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)
location | [`Location`](/Objects/World.md#location) | Type of instance user is in. Offline if user is offline or an empty string if isFriend is false

## Feature

!> Please note this is incomplete!

Key | Type | Description
----|------|------------
twoFactorAuth | boolean | Probably if user is able to enable TwoFactorAuth

## PastDisplayName

Key | Type | Description
------|------|------------
displayName | string | Old user displayName
updated_at | string | Date and time displayName was changed from this

# Special type

## State

State is a string, being of one of the following:

 - "online" User is online in VRChat
 - "active" User is online, but not in VRChat
 - "offline" User is offline

## Status

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
