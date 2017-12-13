# Login

It is worthy to mention there is no real login, since we are using Basic authentication then you are always authenticated as long as you send the header.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
No

## Usage
The main reason you need this API is to get the `authToken`, it also contain data that is private to the user, like events, friends and so on.

Also this is currently the only way to get a user asset, the public user data does not contains that.

## Example response
```json
{
    "id": "usr_{guid}",
    "username": "itay2805",
    "displayName": "itay2805",
    "developerType": "none",
    "hasEmail": true,
    "obfuscatedEmail": "i******@gmail.com",
    "emailVerified": true,
    "hasBirthday": true,
    "unsubscribe": false,
    "friends": [],
    "blueprints": {},
    "currentAvatarBlueprint": {},
    "events": [],
    "currentAvatar": "avtr_{guid}",
    "currentAvatarImageUrl": "url",
    "currentAvatarAssetUrl": "url",
    "currentAvatarThumbnailImageUrl": "url",
    "acceptedTOSVersion": 5,
    "steamDetails": {},
    "hasLoggedInFromClient": true,
    "nuisanceFactor": 0,
    "creatorLevel": 14,
    "socialLevel": 0,
    "timeEquity": 30,
    "level": 10,
    "authToken": "authcookie_{guid}"
}
```