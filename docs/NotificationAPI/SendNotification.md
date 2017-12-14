# Send Notification 

This API allows you to send notifications to other players

?> No idea how it is used in game....

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/:id/notification

id - the user to send notification to

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `NotificaitonType` | No | The type of notification to send
message | string | No | The message to send
details | json as string | Yes | Unknown

### NotificaitonType

    - all
    - message
    - friendrequest
    - invite
    - votetokick
    - halp
    - hidden

## Returns 

Field | Type | Description
------|------|------------
id | string | Notification ID
type | `NotificaitonType` | The notification type
senderUserId | string | The id of the sender
receiverUserId | string | The id of the receiver
message | string | The message
details | `object` | Unknown