# Friend Request

This API allows you to send friend request to another user.

It seems that the response will always be a notification response even if the receiver ID does not exists...

## Request Method 
POST

## Endpoint
    https://api.vrchat.cloud/api/1/user/[ID]/friendRequest

id - the id of the user to send friend request

## Requires Authentication
Yes

## Returns

A [notification](NotificationAPI/SendNotification.md) info. but the type is always `friendRequest`