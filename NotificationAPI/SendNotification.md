# Send Notification 

This API allows you to send notifications to other players.

This API supports the full rich text format from unity.
https://docs.unity3d.com/Manual/StyledText.html

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/user/&lt;ID&gt;/notification

id - the user to send notification to

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
type | `NotificationType` | No | The type of notification to send
message | string | Yes | The message to send
details | json as string | Yes | Details for some notifications

### NotificationType

    - all
    - message
    - friendrequest
    - invite
    - votetokick
    - halp
    - hidden

# Details

NotificationType | Variables
-----------------|----------
invite | "worldId:instance"
votetokick | "userToKickId", "initiatorUserId"
halp | "halpId","worldId"

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
