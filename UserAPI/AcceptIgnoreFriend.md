# Accept/Ignore Friend Request

!> The endpoint details should probably be moved to the Notification API section. but I am not sure if the accept is only used for friendRequest or other types as well

Friend requests can be found using the Notification API when the [Get All Notifications](NotificationAPI/GetAll.md) endpoints using `friendRequest` for the notification type filter.

To ignore a Friend Request simply use the [Delete Notification](NotificationAPI/Delete.md).

To accept use the following endpoint

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/notifications/`<ID>`/accept

id - the id of the friend notification

## Requires Authentication
Yes

## Returns

Object

Field | Type | Description
------|------|------------
success | `object` | Message and Status

#### Success Object
Field | Type | Description
------|------|------------
message | string | The message
status_code | integer | HTTP Status Code

!> Returns the same message for all Notification types
