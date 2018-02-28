# Delete Notification 

This API allows you to delete a notification

The endpoint can suggest that the notification still exists, but it will just be hidden, but I could not find a way to unhide it.

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/notifications/:id/hide

id - the notification id

## Requires Authentication
Yes

## Returns 

the notification (just like the on returned from [Get All Notifications](NotificationAPI/GetAll.md) Endpoint).