```diff
! Special types are listed separately below relevant objects in this file.
```

# Objects

## Notification object

Key | Type | Description
----|------|------------
id | string | Notification ID of the notification (prefixed with not)
senderUsername | string | Username of the user that sent the notification
senderUserId | string | User ID of the user that sent the notification
type | `NotificationType` | Type of notification
message | string | Probably something to do with a messaging system, is empty for now
details | `NotificationDetails` | Details about notification (world info, user info, etc)
seen | boolean | If current user has seen the notification
created_at | string | Date and time the notification was sent

## NotificationDetails objects

There are a few different types of this object, depending on the type of notification

```diff
! Not all NotificationDetails objects are added yet!
```

### Inivte

Key | Type | Description
----|------|------------
worldId | string | `Location` of world invited to (see `Location` [here](Objects/World.md?id=location-type))

### requestInvite

Key | Type | Description
----|------|------------
platform | string | Platform user who sent the notification is on

# Special types

## NotificationType

```diff
! Not all NotificationType options are finished yet!
```

Notification is a string, being one of the following:
 - "all" Only used as a parameter to return all notification types
 - "invite" Another user is inviting current user to a world
 - "requestInvite" Another user is requesting invite to current users world
 - "votetokick" Someone is voting to kick another user
 - "halp" Unknown
 - "hidden" Unknown
