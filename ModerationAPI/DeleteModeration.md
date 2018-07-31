# Delete a spesific moderation

Delete a spesific moderation on a player, requires moderator/internal developerType or admin_moderator tag.

## Request Method 
DELETE

## Endpoint
https://api.vrchat.cloud/api/1/user/&lt;ID&gt;/moderations/&lt;MODERATIONID&gt;

ID - the id of the user
MODERATIONID - the id of the moderation to delete

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
Succes|int|HTTP Response code