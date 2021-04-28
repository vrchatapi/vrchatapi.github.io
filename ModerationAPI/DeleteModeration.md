# Delete a spesific moderation

Delete a spesific moderation on a player, requires moderator/internal developerType or admin_moderator tag.

## Request Method
DELETE

## Endpoint
https://api.vrchat.cloud/api/1/user/[ID]/moderations/[MODERATIONID]

ID - the id of the user
MODERATIONID - the id of the moderation to delete

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

Field | Type | Description
------|------|------------
Succes|int|HTTP Response code
