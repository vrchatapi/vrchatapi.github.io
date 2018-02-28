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

This is probably used to tell the client to send the actual notification to the user, still has to test.

Field | Type | Description
------|------|------------
id | string | Notification ID
senderUserId | string | the sender (current user)
receiverUserId | string | the receiver (user that got the friend request)
type | string | the notification type, always `friendRequest`
jobName | string | what to do, always `write_notification`
jobColor | string | unknown, always `blue` 