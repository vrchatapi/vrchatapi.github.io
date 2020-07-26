# Gets player's moderations

Returns a list of moderations you sent.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/playermoderations

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Returns

Field | Type | Description
------|------|------------
id | string | ID
type | `Moderation Type` | Type of moderation
sourceUserId | string | userId of sender (yours in this case)
sourceDisplayname | string | displayname of sender (yours in this case)
targetUserId | string | The target's userid
targetDisplayName | string | The target's displayname
created | string | Time the moderation was opened

### Player Moderation Types

    - mute
	- unmute
	- block
	- unblock
