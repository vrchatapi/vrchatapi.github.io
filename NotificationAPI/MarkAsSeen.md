# Get All Notifications

!> We tried to test these APIs and we are not sure how they work in-game, even friendrequest wasn't recieved unless we sent a real friend request and not a notification. will have to do some further testing.

This API allows you to set a notification as seen

## Request Method
PUT

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/notifications/[ID]/see

id - the notification id

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Returns

[`Notification object`](Objects/Notification.md?id=notification-object)
