# Steam

This API allows you to get user data from a Steam account

## Request Method
POST

## Endpoint
    https://api.vrchat.cloud/api/1/user/steam

## Requires Authentication
No

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
steamTicket | string | No | The Steamworks ticket from the VRChat game

## Returns

Field | Type | Description
------|------|------------
id|string|The user unique identifier
username|string|The user username
displayName|string|The user display name
pastDisplayName|string[]|The user past display names
hasEmail|bool|True if the user have a verified email address
hasPendingEmail|bool|True if the user have an unverified email address
obfuscatedEmail|string|The obfuscated email of the user
obfuscatedPendingEmail|string|The obfuscated pending email of the user
emailVerified|bool|True if the user have verified his email address
hasBirthday|bool|True if the user have his birthday set
unsubscribe|bool|True if the user have unsubscribed to the VRChat newsletter
friends|string[]|An array of the user's friends userId
friendGroupNames|string[]|
currentAvatarImageUrl|string|The url to the weared avatar image
currentAvatarThumbnailImageUrl|string|The url to the weared avatar thumbnail
currentAvatar|string|The weared avatar id
currentAvatarAssetUrl|string|The url to the weared avatar asset
status|string|The current user status
statusDescription|string|The current user status description
acceptedTOSVersion|string|The last accepted TOS version
steamDetails|Steam Details|The steam details. Empty when using a VRChat account
hasLoggedInFromClient|bool|
homeLocation|string|The user home location id (if set)
tags|string[]|The user tags
developerType|string|The user developer rank
last_login|string|The last user login datetime
authToken|string|The current session authToken. Empty when using a VRChat account

The endpoint also return an auth cookie, that can be used until the socket is disconnected from the web server
