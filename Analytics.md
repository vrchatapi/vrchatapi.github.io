# Analytics API

!> Note, there are alot more analytics then this in-game, I am slowly going over and checking them so it might take some time until there is a full doc on exactly what the game tracks.

VRChat has some built-in analytics. They use [Amplitude](https://amplitude.com/) for managing the analytics.

Some events are considered in-session, and some out-of-session. In-Session events are sent while in game and out in session can be sent by other stuff, like using the unity SDK.

This is not an exact "How to use" documentation but only documents what the game collects and sends about the user and game.

The tracking VRChat does seems to be non-malicious and I would consider it as a pretty avarage tracking for most modern games.

## General Tracking

- [Unique Device ID](https://docs.unity3d.com/ScriptReference/SystemInfo-deviceUniqueIdentifier.html) - A unique device identifier. It is guaranteed to be unique for every device.
- Sessions (assuming photon) - every time the user switches session it sets the last session time and starts counting again.

## SDK Analytics Events

### SDK_CreateAvatar / SDK_UpdateAvatar

Sent when an avatar is created or updated.

considered as out-of-session

Name | Type | Description
-----|-------------------
modelId | string | The ID of the avatar

### SDK_CreateWorld / SDK_UpdateWorld

Sent when an world is created or updated

considered as out-of-session

Name | Type | Description
-----|-------------------
modelId | string | The ID of the world

### SDK_LoginSuccess

considered as out-of-session

Sent when a user is logged in to the API.

## Game Analytics Events

All events sent here are considered as in-session.

### Login_LoginSuccess
Sent when user logged in successfully

Name | Type | Description
-----|------|-------------
displayName | string | The user's display name
numberOfFriends | int | friend count
developerType | string | The user developer type
accountType | string | What is the user type, can be `vrchat`, `steam` or `unknown`
acceptedTOSVersion | int | The TOS version the user accepted

### Login_LoginFail
Sent if login fails

Name | Type | Description
-----|------|-------------
error | string | The fail reason

### Login_ModerationCheckFailed
TODO: When sent
Assuming it is sent when someone tries to moderate without permission

Name | Type | Description
-----|------|-------------
error | string | The fail reason

### Signup_AccountCreationFailed
Sent if signup fails

Name | Type | Description
-----|------|-------------
error | string | The fail reason

### Signup_AccountInfoUpdateFailed
Sent if account update fails

Name | Type | Description
-----|------|-------------
error | string | The fail reason

### Social_AddFavorite
Sent when user adds a favorite avatar/world/friend 

Name | Type | Description
-----|------|-------------
id | string | avatar / world / friends id
name | string | avatar / world / friends name
type | string | type, can be `avatar`, `world` or `friend` (not verified)

### Social_RemoveFavorite
Sent when user removes a favorite 

Name | Type | Description
-----|------|-------------
id | string | avatar / world / friends id
name | string | avatar / world / friends name
type | string | type, can be `avatar`, `world` or `friend` (not verified)

### Avatar_ChangeAvatar
Sent when user changed avatar in-game

Name | Type | Description
-----|------|-------------
avatarId | string | The avatar id
avatarName | string | avatar name
lastAvatarId | string | The avatar id used before the change
lastAvatarName | string | The avatar name used before the change
changeMethod | string | How the user was changed (TODO)
currentAvatarId | string | Same as `avatarId`
currentAvatarName | string | Same as `avatarName`

### World_EnterWorld
Sent when user changes world

Name | Type | Description
-----|------|-------------
woldId | string | The world ID
worldName | string | The world Name
worldOccupants | int | the world occupants
instanceType | string | the instance type
instanceOccupants | int | the instance occupants
lastWorldId | string | The world id the user been before
lastWorldName | string | The world name the user been before
currentWorldId | string | same as `woldId`
currentWorldName | string | same as `worldName`

### World_LeaveWorld
Sent when a user leaves the current world.

Name | Type | Description
-----|------|-------------
woldId | string | The world ID
worldName | string | The world Name
worldOccupants | int | the world occupants
instanceType | string | the instance type
instanceOccupants | int | the instance occupants
newWorldId | string | The new world id

### Error_LoadWorldFailed
Sent when the client failed to load a world

Name | Type | Description
-----|------|-------------
error | string | The fail reason

## Event Types

All events sent in the event stream are considered as in-session.

The event types they send in session:

1. startsVrChat,
2. leavesVrChat,
3. logout,
4. deviceInfo,
5. joinsWorld,
6. leavesWorld,
7. userActivity,
8. error

This are sent along side the other events

# Get By Name

This API allows you to get the number of currently online users.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/visits

## Returns 

!> The int number of online users.