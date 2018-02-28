# Get All Notifications 

!> We tried to test these APIs and we are not sure how they work in-game, even friendrequest wasn't recieved unless we sent a real friend request and not a notification. will have to do some further testing.

This API allows you to get all of the current user's notifications.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/notifications

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `NotificationType` | Yes | Only send notifications of this type (can use `all` for all)
sent | boolean | Yes | Return notifications sent by the user
after | date | Yes | Only return notifications sent after this date

## Returns 

array of notifications

Field | Type | Description
------|------|------------
id | string | Notification ID
senderUserId | string | The id of the sender
senderUsername | string | The username of the sender
type | `NotificationType` | The notification type
message | string | The message
details | `object` | Unknown
seen | boolean | did you see the notification
created_at | date | when did you get the notification

### NotificationType

    - all
    - message
    - friendrequest
    - invite
    - votetokick
    - halp
    - hidden

