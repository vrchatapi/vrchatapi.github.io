!> Special types are listed separately below relevant objects in this file.

# Objects

## Notification object

Key | Type | Description
----|------|------------
id | string | Notification ID of the notification (prefixed with not)
senderUsername | string | Username of the user that sent the notification
senderUserId | string | User ID of the user that sent the notification
type | [`NotificationType`](/Objects/Notification.md#notification) | Type of notification
message | string | Probably something to do with a messaging system, is empty for now
details | [`NotificationDetails`](/Objects/Notification.md#notificationdetails-objects) | Details about notification (world info, user info, etc)
seen | boolean | If current user has seen the notification
created_at | string | Date and time the notification was sent

## NotificationDetails objects

!> Not all NotificationDetails objects are added yet!

There are a few different types of this object, depending on the type of notification

### Invite

Key | Type | Description
----|------|------------
worldId | [`Location`](/Objects/World.md#location) | Location the invite is to

### requestInvite

Key | Type | Description
----|------|------------
platform | string | Platform user who sent the notification is on

### votetokick

Key | Type | Description
----|------|------------
userToKickId | [`userId`](/Objects/User#user-object) | ID of the user to kick
initiatorUserId | [`userId`](/Objects/User#user-object) | ID of the user who started vote

### halp

Key | Type | Description
----|------|------------
halpId | [`worldId`](/Objects/World#limited-world-object) | ID of world

# Special types

## Notification

Notification is a string, being one of the following:

### Sendable notifications
 - "requestInvite" To request an invite from another user to their world
 - "invite" An invite from another user to their world
 - "broadcast" Not implemented
 - "message" Not implemented

### Receivable notifications
 - "all" Only used as a parameter to return all notification types
 - "broadcast" Not implemented
 - "message" Not implemented
 - "friendRequest" Another user wants to be friends with current user
 - "invite" Another user is inviting current user to a world
 - "requestInvite" Another user is requesting invite to current users world
 - "votetokick" Someone is voting to kick another user
 - "halp" Unknown (This might not exist anymore!)
 - "hidden" Unknown (This might not exist anymore!)
