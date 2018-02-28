# Get All Notifications 

This API allows you to set a notification as seen

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/notifications/:id/see

id - the notification id

## Requires Authentication
Yes

## Returns 

the notification (just like the on returned from [Get All Notifications](NotificationAPI/GetAll.md) Endpoint), but the `seen` will be set to `true`.
