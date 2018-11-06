# Login

This API allows you to get user data from a VRChat account

## Request Method
GET

## Endpoint
    https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
Yes (see the [Mozilla Developer page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) for more informations)

## Returns
Field | Type | Description
------|------|------------
id|string|The user's unique identifier
username|string|The user's username
displayName|string|The user's display name
pastDisplayName|string[]|The user's past display names
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
status|string|The current user's status
statusDescription|string|The current user's status description
acceptedTOSVersion|string|The last accepted TOS version
steamDetails|Steam Details|The steam details. Empty when using a VRChat account
hasLoggedInFromClient|bool|Return true if the client use a steam account
homeLocation|string|The user home location id (if set)
tags|string[]|The user's tags
developerType|string|The user's developer rank
last_login|string|The last user's login datetime
authToken|string|The current session authToken. Empty when using a VRChat account


The endpoint also return an auth cookie, that can be used until the socket is disconnected from the web server
