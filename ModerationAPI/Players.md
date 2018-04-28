# Gets player's moderations


## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/playermoderations

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
id | string | The Moderation Id
type | string | Type Of Moderations, Look Below
sourceUserId | string | The Persons userId Sending the moderation
sourceDisplayname | string | The Persons Name In Vrchat that is sending the moderation
targetUserId | string | The Persons UserId you are sending the moderation too
targetDisplayName | string | The Persons Name In VRChat You Are Sending The Moderation to
created | string | Time The Moderation Happened 