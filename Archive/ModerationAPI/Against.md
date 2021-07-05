!> **Archive notice** This endpoint was removed in March of 2021.

# Get player's moderations against you

Returns a list with all the moderations against the current user.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/playermoderated


## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

Field | Type | Description
------|------|------------
id | string | ID
type | `Moderation Type` | Type of moderation
sourceUserId | string | userId of sender
sourceDisplayname | string | displayname of sender
targetUserId | string | The target's userid (yours in this case)
targetDisplayName | string | The target's displayname (yours in this case)
created | string | Time the moderation was opened

### Player Moderation Types

  - mute
  - unmute
  - block
  - unblock
  - hideAvatar
  - showAvatar
