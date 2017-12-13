# User Object

When we refer to the user object, we refer to the data that is used by the server to represent a user. 

## Public User
This is the data everyone can get about a user

Field | Type | Description
------|------|------------
id | string | The user id
username | string | The username
displayName | string | The username
currentAvatarImageUrl | string | URL to the avatar image
currentAvatarThumbnailImageUrl | string | URL to the avatar image (smaller)
worldId | string | The ID the user is in or `offline`
instanceId | string | The ID of the instance the user is in or `offline`
location | string | unknown
developerType | `DeveloperType` | Is a developer

## Private User
This is the data only the current user can see

Field | Type | Description
------|------|------------
id | string | The user id
username | string | the username
displayName | string | The username
developerType | `DeveloperType` | Is a developer
hasEmail | boolean | Did the user provide an email
obfuscatedEmail | string | The email, contains first letter and the host, other is obfuscated like i******@gmail.com
emailVerified | boolean | Did the user verify the email
hasBirthday | boolean | Did the user provided a DOB
unsubscribed | boolean | Unknown
friends | array | Unknown
blueprints | object | unknown
currentAvatarBlueprint | object | unknown
events | array | unknown
currentAvatar | string | Current avatar ID
currentAvatarImageUrl | string | URL to the avatar image
currentAvatarAssetUrl | string | URL to download the asset (as UnityFS file)
currentAvatarThumbnailImageUrl | string | URL to the avatar image (smaller)
acceptedTOSVersion | int | Probably used to track if you need to accept a new TOS
steamDetails | object | unknown 
hasLoggedInFromClient | boolean | unknown
nuisanceFactor | int | unknown
creatorLevel | int | unknown
socialLevel | int | unknown
timeEquity | int | unknown
level | int | unknown
authToken | string | Used for authenticating


## Developer Type
This is an enum to tell if the user is a developer or not

- none: not a developer
- trusted: ?
- internal: VRChat developer