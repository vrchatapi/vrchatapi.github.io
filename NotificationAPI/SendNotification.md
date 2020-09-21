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

Field | Type | Description
------|------|------------
id | string | Notification ID
type | `NotificationType` | The notification type
senderUserId | string | The id of the sender
receiverUserId | string | The id of the receiver
message | string | The message
details | `object` | Unknown
jobName | string | unknown, always `write_notification`
jobColor | string | unknown, always `blue`
