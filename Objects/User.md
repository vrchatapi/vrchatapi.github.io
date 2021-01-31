# Objects

## Current User object

| Field                          | Type              | Description                                                                                              |
|--------------------------------|-------------------|----------------------------------------------------------------------------------------------------------|
| acceptedTOSVersion             | Integer                                                         | Version of VRChat TOS that has been accepted                                                             |
| accountDeletionData?           | ?string                                                         | Date account is scheduled for deletion                                                                   |
| activeFriends                  | Array of strings                                                | Each string is a user's ID                                                                               |
| allowAvatarCopying             | Boolean                                                         | If user is allowing public avatars to be copied from them in-game                                        |
| bio                            | String                                                          | User defined biography                                                                                   |
| bioLinks                       | Array of strings                                                | User defined links                                                                                       |
| currentAvatar                  | String                                                          | ID of current avatar                                                                                     |
| currentAvatarAssetURL          | String                                                          | URL of current avatar's .vrca file                                                                       |
| currentAvatarImageUrl          | String                                                          | URL of current avatar's display image                                                                    |
| currentAvatarThumbnailImageUrl | String                                                          | URL of current avatar's thumbnail image                                                                  |
| date_joined                    | String                                                          | Date user made the VRChat account; format YYYY-MM-DD                                                     |
| developerType                  | String                                                          | [`DeveloperType`](/Objects/User.md#developertype)                                                        |
| displayName                    | String                                                          | User's current displayed name                                                                            |
| email                          | String                                                          | User's email                                                                                             |
| emailVerified                  | Boolean                                                         | If user's email has been verified                                                                        |
| fallbackAvatar                 | String                                                          | ID of fallback avatar                                                                                    |
| feature                        | JSONArray                                                       | [`Feature`](/Objects/User.md#feature)                                                                    |
| friendGroupNames               | Array of strings                                                | Each string is a user-defined group name, used to categorize friends                                     |
| friendKey                      | String                                                          | User's friend key, probably used in backend to track friends                                             |
| friends                        | Array of strings                                                | Each string is a user ID                                                                                 |
| hasBirthday                    | Boolean                                                         | If user has defined their birthday                                                                       |
| hasEmail                       | Boolean                                                         | If user has an email                                                                                     |
| hasLoggedInFromClient          | Boolean                                                         | If user has logged in from the game-client (steam, oculus, etc)                                          |
| hasPendingEmail                | Boolean                                                         | If user has a pending (not verified) email                                                               |
| homeLocation                   | String                                                          | ID of user's home world                                                                                  |
| id                             | String                                                          | User's ID                                                                                                |
| isFriend                       | Boolean                                                         | If logged in user and this user are friends                                                              |
| last_login                     | String                                                          | Date-time of last client login; format YYYY-MM-DDTHH:mm:SSZ                                              |
| last_platform                  | String                                                          | Name for last client platform the user logged in on                                                      |
| obfuscatedEmail                | String                                                          | User's email, but obfuscated                                                                             |
| obfuscatedPendingEmail         | String                                                          | User's pending email, but obfuscated                                                                     |
| oculusId                       | String                                                          | ID of oculus account                                                                                     |
| offlineFriends                 | Array of strings                                                | Each string is a user ID, all users are offline                                                          |
| onlineFriends                  | Array of strings                                                | Each string is a user ID, all users are online in-game                                                   |
| pastDisplayNames               | Array of [`PastDisplayName`](/Objects/User.md#pastdisplayname)  | Each string is a user's past display name                                                                |
| state                          | String                                                          | [`State`](/Objects/User.md#state)                                                                        |
| status                         | String                                                          | [`Status`](/Objects/User.md#status)                                                                      |
| statusDescription              | String                                                          | User defined status                                                                                      |
| steamDetails                   | JSONArray                                                       | Details about user's steam account                                                                       |
| steamId                        | String                                                          | ID of steam account                                                                                      |
| tags                           | Array of strings                                                | Each string is a tag given by developers or the game, usually denoting things like trust and permissions |
| twoFactorAuthEnabled           | Boolean                                                         | If user has 2fa enabled                                                                                  |
| unsubscribe                    | Boolean                                                         | If user has unsubscribed from VRChat emails                                                              |
| userIcon                       | String                                                          | URL to image file used as user's icon                                                                    |
| username                       | String                                                          | User's login name                                                                                        |

## User object

| Field                          | Type             | Description                                                                                              |
|--------------------------------|------------------|----------------------------------------------------------------------------------------------------------|
| allowAvatarCopying             | Boolean          | If user is allowing public avatars to be copied from them in-game                                        |
| bio                            | String           | User defined biography                                                                                   |
| bioLinks                       | Array of strings | User defined links                                                                                       |
| currentAvatarImageUrl          | String           | URL of current avatar's display image                                                                    |
| currentAvatarThumbnailImageUrl | String           | URL of current avatar's thumbnail image                                                                  |
| date_joined                    | String           | Date user made the VRChat account; format YYYY-MM-DD                                                     |
| developerType                  | String           | [`DeveloperType`](/Objects/User.md#developertype)                                                        |
| displayName                    | String           | User's current displayed name                                                                            |
| fallbackAvatar                 | String           | ID of fallback avatar                                                                                    |
| friendKey                      | String           | User's friend key, probably used in backend to track friends                                             |
| id                             | String           | User's ID                                                                                                |
| isFriend                       | Boolean          | If logged in user and this user are friends                                                              |
| last_login                     | String           | Date-time of last client login; format YYYY-MM-DDTHH:mm:SSZ                                              |
| last_platform                  | String           | Name for last client platform the user logged in on                                                      |
| location                       | String           | TODO                                                                                                     |
| state                          | String           | [`State`](/Objects/User.md#state)                                                                        |
| status                         | String           | [`Status`](/Objects/User.md#status)                                                                      |
| statusDescription              | String           | User defined status                                                                                      |
| tags                           | Array of strings | Each string is a tag given by developers or the game, usually denoting things like trust and permissions |
| userIcon                       | String           | URL to image file used as user's icon                                                                    |
| username                       | String           | User's login name                                                                                        |
| worldId                        | String           | TODO                                                                                                     |

## Limited User object

| Field                          | Type             | Description                                                                                                |
|--------------------------------|------------------|------------------------------------------------------------------------------------------------------------|
| bio                            | String           | User defined biography                                                                                     |
| currentAvatarImageUrl          | String           | URL of current avatar's display image                                                                      |
| currentAvatarThumbnailImageUrl | String           | URL of current avatar's thumbnail image                                                                    |
| developerType                  | String           | [`DeveloperType`](/Objects/User.md#developertype)                                                          |
| displayName                    | String           | User's current displayed name                                                                              |
| fallbackAvatar                 | String           | ID of fallback avatar                                                                                      |
| friendKey                      | String           | User's friend key, probably used in backend to track friends                                               |
| id                             | String           | User's ID                                                                                                  |
| isFriend                       | Boolean          | If logged in user and this user are friends                                                                |
| last_login                     | String           | Date-time of last client login; format YYYY-MM-DDTHH:mm:SSZ                                                |
| last_platform                  | String           | Name for last client platform the user logged in on                                                        |
| location                       | String           | TODO                                                                                                       |
| status                         | String           | [`Status`](/Objects/User.md#status)                                                                        |
| statusDescription              | String           | User defined status                                                                                        |
| tags                           | Array of strings | Each string is a tag given by developers or the game, usually | denoting things like trust and permissions |
| userIcon                       | String           | URL to image file used as user's icon                                                                      |
| username                       | String           | User's login name                                                                                          |

## Feature

!> Please note this is incomplete!

| Field       | Type    | Description                                      |
|-------------|---------|--------------------------------------------------|
twoFactorAuth | boolean | Probably if user is able to enable TwoFactorAuth |

## PastDisplayName

| Field       | Type   | Description                                     |
|-------------|--------|-------------------------------------------------|
| displayName | string | Old user displayName                            |
| updated_at  | string | Date and time displayName was changed from this |

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
