# Friend Request

This API allows you to send friend request to another user.

It seems that the response will always be a notification response even if the receiver ID does not exists...

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/:id/friendRequest

id - the id of the user to send friend request

## Requires Authentication
Yes

## Returns

A notification info.

!> Once we update the notification API things will be more clear

Field | Type | Description
------|------|------------
id | string | Notification ID
senderUserId | string | the sender (current user)
receiverUserId | string | the receiver (user that got the friend request)
type | string | unknown, always `friendRequest`
jobName | string | unknown, always `write_notification`
jobColor | string | unknown, always `blue` 