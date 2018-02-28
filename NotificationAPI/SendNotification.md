# Send Notification 

!> We tried to test these APIs and we are not sure how they work in-game, even friendrequest wasn't recieved unless we sent a real friend request and not a notification. will have to do some further testing.

This API allows you to send notifications to other players

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
type | `NotificationType` | No | The type of notification to send
message | string | No | The message to send
details | json as string | Yes | Unknown

### NotificationType

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
type | `NotificationType` | The notification type
senderUserId | string | The id of the sender
receiverUserId | string | The id of the receiver
message | string | The message
details | `object` | Unknown
jobName | string | unknown, always `write_notification`
jobColor | string | unknown, always `blue`