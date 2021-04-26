
# Sends player moderations

##  Send Block

###  Request Method
POST

###  Endpoint
https://api.vrchat.cloud/api/1/auth/user/blocks

### Requires Authentication
Yes (See [here](/Authorization.md) for details)

### Parameters

Field | Type | Optional | Description
------|------|----------|------------
blocked | string | no | the user id of the user you want to block

### Returns

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
  - hideAvatar
  - showAvatar

# Send Unblock

### Request Method
PUT

### Endpoint
https://api.vrchat.cloud/api/1/auth/user/unblocks

###  Requires Authentication
Yes

### Parameters

Field | Type | Optional | Description
------|------|----------|------------
blocked | string | no | the user id of the user you want to unblock

###  Returns
JSONArray containing object "success", inside there is:

Field | Type | Description
------|------|------------
message | string | "User userid unblocked"
status_code | int | http response code

## Send block/mute/unmute type

### Request Method
POST

### Endpoint
https://api.vrchat.cloud/api/1/auth/user/playermoderations

### Requires Authentication
Yes

###  Parameters

Field | Type | Optional | Description
------|------|----------|------------
type  | `Moderation Type` | no | The type of playermoderation you want to send
moderated | string | no | the user id of the user you want the moderation to count for

### Returns

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
