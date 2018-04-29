# Send moderation


## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/:id/moderations

## Requires Authentication
Yes

## Also Requires Moderator/Internal DeveloperType

## Returns 

Field | Type | Description
------|------|------------
type | string | Type Of Moderations, Look Below
reason | string | Reason For Moderation
created | string | Time The Moderation Was Created
worldId | string | The World The Moderation Is Taking Place
instanceId | string | The Instance The Moderation Is Taking Place

### Moderation Types

    - none
	- warn
	- kick
	- ban
	- banpubliconly (unknown)