# Register

This API allows you to register new users.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/register

## Requires Authentication
No

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
username | string | No | The new username
password | string | No | The new password
email | string | No | The new email
birthday | string | Yes | The birthday
acceptedTOSVersion | string | Yes | accepted ToS version

## Returns

Field | Type | Description
------|------|------------
id | string | The user id
username | string | the username (used for login)
displayName | string | the display name
pastDisplayNames | array of `PastDisplayName` | the past display names
developerType | `DeveloperType` | the user type (most are none)
hasEmail | boolean | was an email provided (probably for steam users)
obfuscatedEmail | string | the email but with obfuscated data
emailVerified | boolean | was the email verified?
hasBirthday | boolean | does the user have his birthday setted?
unsubscribe | boolean | unknown
friends | array of user ids | The friends of the user
blueprints | object | unknown
currentAvatarBlueprint | object | unknown
events | array | unknown
currentAvatar | string | The id of the current avatar
currentAvatarImageUrl | string | the url for the avatar preview
currentAvatarAssetUrl | string | the url for the unity asset
currentAvatarThumbnailImageUrl | string | the url for the avatar thumbnail
acceptedTOSVersion | int | the version of the accepted ToS, used to check if user needs to accept a new ToS
steamDetails | `SteamDetails` | the steam details of the user, empty if steam is not connected
hasLoggedInFromClient | boolean | did the user ever use the client 
authToken | string | a token that can be used to continue accessing API endpoints


### PastDisplayName
Field | Type | Description
------|------|------------
displayName | string | the name
updated_at | date | the date that display name was changed

### DeveloperType

    - none
    - trusted
    - internal
    - moderator 