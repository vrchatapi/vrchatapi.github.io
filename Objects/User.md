
>! Special types are listed separately below relevant objects in this file.
>! Steam and oculus related keys are incomplete at the moment

# Objects

## Current User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
pastDisplayNames | array | Array of [`PastDisplayName`](Objects/User.md?id=pastdisplayname) objects
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user
bioLinks | array | Array of URLs (strings) user has added to their account
email | string | User email, empty if none
emailVerified | boolean | If user has verified their email
hasEmail | boolean | If user has an email
hasPendingEmail | boolean | If user has an email but hasn't verified it
obfuscatedEmail | string | User email but obfuscated, empty if none
obfuscatedPendingEmail | string | Pending user email but obfuscated, empty if none
steamId | string | User steamId (Don't know which one), empty if using VRChat account
steamDetails | JSONArray | Steam details of user, empty if using VRChat account
oculusId | string | User oculusId, empty if none
acceptedTOSVersion | integer | Version of the VRChat Terms-Of-Service user has accepted
hasBirthday | boolean | If user has a birthday set
friends | array | Array of friend User IDs
friendGroupNames | array | Array of names (strings) of groups user has made
state | [`State`](Objects/User.md?id=state) | Current state of user, only returns if isFriend is true
status | [`Status`](Objects/User.md?id=status) | Current status of user, only returns if isFriend is true
statusDescription | string | Custom status message of user
currentAvatar | string | Avatar ID of current avatar
currentAvatarAssetUrl | string | Url to bundled avatar file (.vrca)
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
homeLocation | string | World ID of users home world
last_login | string | Time and date user last logged in
last_platform | string | Last platform of VRChat that user logged in from
hasLoggedInFromClient | boolean | If user has logged in via the VRChat client
twoFactorAuthEnabled | boolean | If user has TwoFactorAuth enabled
allowAvatarCopying | boolean | If user has allowed cloning of public avatars they are using
accountDeletionDate | string/null | Either date and time account will be deleted or date and time account was deleted. Returns null type when none
unsubscribe | boolean | If user has unsubscribed from VRChat general emails
tags | array | Array of strings, defining certain settings and accessibility user has
feature | [`Feature`](Objects/User.md?id=feature) | Probably current 'features' and if the user has access to them
developerType | [`DeveloperType`](Objects/User.md?id=developertype) | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)
friendKey | string | Key that probably identifies you as their friend if you have it, or an empty string if isFriend is false

## User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user
bioLinks | array | Array of URLs (strings) user has added to their account
state | [`State`](Objects/User.md?id=state) | Current state of user, only returns if isFriend is true
status | [`Status`](Objects/User.md?id=status) | Current status of user, only returns if isFriend is true
statusDescription | string | Custom status message of user
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_login | string | Time and date user last logged in
last_platform | string | Last platform of VRChat that user logged in from
allowAvatarCopying | boolean | If user has allowed cloning of public avatars they are using
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | [`DeveloperType`](Objects/User.md?id=developertype) | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)
friendKey | string | Key that probably identifies you as their friend if you have it, or an empty string if isFriend is false
location | [`Location`](Objects/World.md?id=location) | Type of instance user is in. Offline if user is offline or an empty string if isFriend is false
worldId | string | World ID of world user is in, offline if user is offline or empty string if isFriend is false
instanceId | [`Location`](Objects/World.md?id=location) | Instance location with no worldId (combination of instanceName, [`instanceType`](Objects/World.md?id=instance-type) and [`nonce`](Objects/World.md?id=nonce)). Offline if user is offline or empty string if isFriend is false.

## Limited User object

Key | Type | Description
----|------|------------
username | string | Users username (displayName, but lowercase)
displayName | string | Users display name
id | string | User ID of user (Usually prefixed by "usr", except in some rare cases)
bio | string | Bio of user, set on the VRChat website
status | [`Status`](Objects/User.md?id=status) | Current status of user, only returns if isFriend is true
currentAvatarImageUrl | string | Cover image of user's current avatar
currentAvatarThumbnailImageUrl | string | Small cover image of user's current avatar
last_platform | string | Last platform of VRChat that user logged in from
tags | array | Array of strings, defining certain settings and accessibility user has
developerType | [`DeveloperType`](Objects/User.md?id=developertype) | Type of developer user is
isFriend | boolean | If the user is a friend of current user (who got this object in response)

## Feature

>! Please note this is incomplete!

Key | Type | Description
----|------|------------
twoFactorAuth | boolean | Probably if user is able to enable TwoFactorAuth

## PastDisplayName

Field | Type | Description
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
