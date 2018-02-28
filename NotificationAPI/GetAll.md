# Get All Notifications 

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
type | `NotificaitonType` | Yes | Only send notifications of this type (can use `all` for all)
sent | boolean | Yes | Return notifications sent by the user
after | date | Yes | Only return notifications sent after this date

## Returns 

array of notifications

Field | Type | Description
------|------|------------
id | string | Notification ID
senderUserId | string | The id of the sender
senderUsername | string | The username of the sender
type | `NotificaitonType` | The notification type
message | string | The message
details | `object` | Unknown
seen | boolean | did you see the notification
created_at | date | when did you get the notification

### NotificaitonType

    - all
    - message
    - friendrequest
    - invite
    - votetokick
    - halp
    - hidden

