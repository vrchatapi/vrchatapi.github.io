# Login

The main reason you need this API is to get the `authToken`, it also contain data that is private to the user, like events, friends and so on.

Also this is currently the only way to get a user asset, the public user data does not contains that.


It is worthy to mention there is no real login, since we are using Basic authentication then you are always authenticated as long as you send the header.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
No

## Returns

Field | Type | Description
------|------|------------
id | string | The user id
username | string | the username (used for login)
displayName | string | the display name
pastDisplayNames | array of `PastDisplayName` | the past display names
developerType | `DeveloperType` | the user type (most are none)
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
tags | array of `Permission` | The permissions the user has. 
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
    
### Tags

user with `admin_scripting_access` or `system_scripting_access` means he has scripting access.

users with `system_avatar_access` can publish avatars.

users with `system_world_access` can publish worldss.

users with `system_trust_basic` have basic trust level.
