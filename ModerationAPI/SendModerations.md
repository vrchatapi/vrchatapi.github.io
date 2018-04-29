# Send moderation

Sends a moderation to another player, requries moderator/internal developerType.

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/:id/moderations

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
type | `Moderation Type` | Type of moderations, Look Below
reason | string | Reason for moderation
created | string | Time the moderation was created
worldId | string | The world the moderation was created in
instanceId | string | The world instance the moderation was created in

### Moderation Type

    - none
	- warn
	- kick
	- ban
	- banpubliconly (unknown)