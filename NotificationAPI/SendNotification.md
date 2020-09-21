# Send Notification

This API allows you to send notifications to other players.

This API supports the full rich text format from unity.
https://docs.unity3d.com/Manual/StyledText.html

## Unsure if this endpoint still works

Note when trying to use this endpoint, you may get variable amounts of success. When trying to test this endpoint I get:

```json
{
    'error': {
        'message': 'Validation failed',
        'data': [
            'message is required.',
            'type is required.'
        ],
        'status_code': 400
    }
}
```

This is while passing both message and type parameters, and using a known working authorization header.

## Request Method
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/[ID]/notification

id - the user to send notification to

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | [`NotificationType`]("Objects/Notification.md?id=notification") | No | The type of notification to send
message | string | Yes | The message to send
details | json as string | Yes | Details for some notifications

## Returns

[`Notification Object`](Objects/Notification?id=notification-object), with the extra key-value pairs below

Field | Type | Description
------|------|------------
receiverUserId | [`userId`](Objects/User?id=user-object) | ID of the user who will receive the notification
jobName | string | unknown, always `write_notification`
jobColor | string | unknown, always `blue`

# Other notes

When trying to send message or broadcast notifications, you will receive this error:

```json
{
    'error': {
        'message': "The endpoint you've contacted has not been completed, yet.",
        'status_code': 501
    }
}
```
