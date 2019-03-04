# Current User Details

This contains most of the details of the user

It is worthy to mention there is no real login, since we are using Basic authentication then you are always authenticated as long as you send the header.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
Yes

## Returns

Field | Type | Description
------|------|------------
id | string | The user id
username | string | the username (used for login)
displayName | string | the display name
pastDisplayNames | array of `PastDisplayName` | the past display names
hasEmail | bool | has an email
hasPendingEmail | bool | has email pending for verification
obfuscatedEmail | string | the email with most of the user obfuscated
obfuscatedPendingEmail | string | the email pending for verification obfuscated
emailVerified | bool | is the email verified
hasBirthday | bool | has birthday set
unsubscribe | bool | unknown
friends | array of strings | IDs of the players you are friend with
friendGroupName | string | unknown (possibly way to group friends together in the future)
blueprints | string | unknown (possibly legacy stuff)
currentAvatarBlueprint | string | unknown (possibly legacy stuff)
currentAvatar | string | current user avatar ID
currentAvatarImageUrl | string | URL to the avatar image
currentAvatarAssetUrl | string | URL to the asset file
currentAvatarThumbnailImageUrl | string | URL to the avatar thumbnail image (lower res)
status | string | TODO
statusDescription | string | TODO
acceptedTOSVersion | int | last accepted TOS version, used to check if needs to re-accept
steamDetails | `SteamDetails` | If the user is a steam user this is his steam details
hasLoggedInFromClient | bool | logged from the client
homeLocation | string | TODO
tags | array of string | the user [tags](UserAPI/Tags.md)
developerType | enum as string | the user type

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

### SteamDetails
TODO