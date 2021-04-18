# Send votekick

Sends a votekick moderation about another player. Requires World and Instance ID.

## Request Method
POST

## Endpoint

https://api.vrchat.cloud/api/1/user/[ID]/votekick
ID - the id of the user

## Requires Authentication
Yes (See [here](/Authorization.md) for details)

## Requires

Field | Type | Description
------|------|------------
worldId | string | The world the moderation will be created in
instanceId | string | The world instance the moderation was created in

## Returns

Field | Type | Description
------|------|------------
message | string | "[displayName] has been duly votekicked."
