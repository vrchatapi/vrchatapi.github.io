# User Object

When we refer to the user object, we refer to the data that is used by the server to represent a user. 

## Public User
This is the data everyone can get about a user

- `string` id
- `string` username
- `string` displayName
- `DeveloperType` developerType
- `string` location
- `string` currentAvatar 
- `string` currentAvatarThumbnailImageUrl 
- `string` currentAvatarImageUrl 
- `string` currentAvatarAssetUrl 

## Private User
This is the data only the current user can see
    
- `string` id
- `string` username
- `string` displayName
- `DeveloperType` developerType
- `string` location
- `string` currentAvatar 
- `string` currentAvatarThumbnailImageUrl 
- `string` currentAvatarImageUrl 
- `string` currentAvatarAssetUrl 
- `boolean` emailVerified 
- `boolean` hasEmail 
- `boolean` hasBirthday 
- `int` acceptedTOSVersion 
- `string` authToken 
- `int` creatorLevel 
- `int` socialLevel
- `int` level
- `string` obfuscatedEmail 
- `bool` unsubscribed 
