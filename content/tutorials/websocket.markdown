---
title: Websocket API
category: general
difficulty: hard
toc: true
---

The VRChat Websocket API (a.k.a. "Pipeline") is used receiving updates regarding the API, such as receiving an invite request.
The WebSocket is **receive-only**, meaning that you can only listen for messages. Sending messages is undefined behavior.

## Connecting

Connecting to the VRChat webhook server is done via the URL:
`wss://pipeline.vrchat.cloud/?authToken=authcookie_...`

The auth-token query parameter is the authorization cookie you receive when logging into VRChat.
A proper User-Agent is also required to connect to the websocket server.
It is possible to be connected from multiple locations at the same time. All clients will receive the exact same messages.

> **ℹ️ Most messages are double-encoded!**
>
> All notification `content` values will be documented in JSON object form. The "`content`" frield is a **stringified** version of the JSON object, and needs to be unpacked separately. _(with the exception of `see-notification` and `hide-notification` events, which take a notification ID instead.)_
>
> ```json
> {
>     "type": "notification",
>     "content": "{\"userId\": \"usr_...\"}"
> }
> ```

## Note on Enumerations

Several JSON string values present in both Websocket API messages and HTTP API responses appear to be contained in predictably consistent sets.
Throughout both APIs, the empty string `""` is returned in places (including the immediately) where it would seem otherwise reasonable to have a `null` or undefined value.
In this part of the documentation, the following `":identifier"`s will be used to describe possible enumeration-ish values:

- `":locationString"`
    - `""` Pseudo-null value
    - `"offline"` Implies a user currently is not either running the VRChat client or connected to the Pipeline (e.g., browser tab open)
    - `"traveling"` Indicates a user's client is travelling between instances (e.g., downloading world, synchronizing world state)
    - `"private"` Indicates a user's location is not visible to the currently logged-in user. (e.g., Ask Me/Do Not Disturb status, Invite/Invite+/Group instance)
    - *other values* An actual location (see https://vrchatapi.github.io/tutorials/instances/)
- `":platformString"`
    - `""` Pseudo-null value
    - `"standalonewindows"`
    - `"android"`
    - `"web"` User is on a https://vrchat.com/home page
    - *other values* Some other platform or third-party application (e.g., `"ios"` could be the value for a future build on some Apple devices)
- `":contentRefreshContentTypeEnum"`
    - `"gallery"`
    - `"icon"`
    - `"emoji"`
    - `"avatar"`
    - `"world"`
    - *other values* Some other user-uploaded content
- `":contentRefreshActionTypeEnum"`
    - `"created"`
    - `"deleted"`
    - *other values* Not expected

## Events

### Notification Events

#### notification
A "`notification`" event carries a Notification object, and are used by Invites, Friend Requests and other in-game notifications.

```json
{
    "type": "notification",
    "content": {
        // <Notification Object>, See return data of Notification API:
        // https://vrchatapi.github.io/docs/api/#get-/auth/user/notifications
    }
}
```

#### response-notification
The "`response-notification`" event is used to respond to a previously sent event.
It carries an ID of the response notification "`responseId`", whereby the data is required to be fetched from the API.
It also carries "`notificationId`" to indicate which notification this is a response to.

```json
{
    "type": "response-notification",
    "content": {
        "notificationId": ":notificationId", // not_00000000-0000-0000-000000000000
        "receiverId": ":userId", // usr_00000000-0000-0000-000000000000
        "responseId": ":notificationId", // not_00000000-0000-0000-000000000000
    }
}
```

#### see-notification
A "`see-notification`" event is sent when the client should mark a specific notification as seen.

```json
{
    "type": "see-notification",
    "content": ":notificationId" // The ID of the notification to mark as seen.
}
```

#### hide-notification
A "`hide-notification`" event is sent when the client should hide a notification.

```json
{
    "type": "hide-notification",
    "content": ":notificationId" // The ID of the notification to hide.
}
```

#### clear-notification
A "`clear-notification`" event is sent when the client should clear **all** notifications.

```json
{
    "type": "clear-notification"
}
```

#### About NotificationV2 Events

The `version` property of the `content` of these events all currently have the value `2`.

#### notification-v2
A "`notification-v2`" event carries a NotificationV2 object.

```json
{
    "type": "notification-v2",
    "content": {
        "id":  ":notificationId",
        "version": 2, // Appears to be a static marker
        "type": ":notificationV2TypeEnum", // One of: "group.announcement", ???
        "category": ":notificationV2CategoryEnum", // One of: "social.group", ???
        "isSystem": <boolean>,
        "ignoreDND": <boolean>,
        "senderUserId": ":userId", // NOTE: WILL BE NULL if the notification didn't originate from a user
        "senderUsername": ":username", // NOTE: same as "senderUserId"
        "receiverUserId": ":userId",
        "relatedNotificationsId": ":?Id", // gpos_00000000-0000-0000-0000-000000000000
        "title": ":string",
        "message": ":string",
        "imageUrl": ":assetUrl",
        "link": ":notificationLinkUri", // The scheme is the type of the linked object, and the path is the id of that object, e.g.: "group:grp_00000000-0000-0000-0000-000000000000"
        "linkText": ":string",
        "responses": [
            {
                "type": ":notificationV2ResponseTypeEnum", // One of: "delete", "unsubscribe", ???
                "data": ":string", // Auxiliary data
                                   // If the type is "delete", then this will be empty
                                   // If the type is "unsubscribe", then this will be the id of the sending object, a comma, and the id of the (recieving) user
                                   //   e.g.: grp_00000000-0000-0000-000000000000,usr_00000000-0000-0000-000000000000
                "icon": ":notificationV2ResponseIconEnum", // One of: "check", "bell-slash", ???
                "text": ":string"
            }
        ],
        "expiresAt": "dateTimeString", // yyyy-mm-ddThh:mm:ss.sssZ
        "expiryAfterSeen": <number>, // Typically 900
        "requireSeen": <boolean>,
        "seen": <boolean>,
        "canDelete": <boolean>,
        "createdAt": ":dateTimeString",
        "updatedAt": ":dateTimeString"
    }
}
```

#### notification-v2-update
A "`notification-v2-update`" event is sent when the client should update a notification, overwriting at least one property.

```json
{
    "type": "notification-v2-update",
    "content": {
        "id":  ":notificationId",
        "version": 2,
        "updates": {
            // These properties are to be overwrite the properties found in the content of a `notification-v2` event
        }
    }
}
```

#### notification-v2-delete
A "`notification-v2-delete`" event is sent when the client should delete one or more notifications.

```json
{
    "type": "notification-v2-delete",
    "content": {
        "ids": [
            ":notificationId"
        ],
        "version": 2
    }
}
```

---

### Friend Events

#### friend-add
A "`friend-add`" event is sent when the user has either accepted a friend request, or has had one of their friend requests accepted.

```json
{
    "type": "friend-add",
    "content": {
        "userId": ":userId", // usr_00000000-0000-0000-000000000000
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        }
    }
}
```

#### friend-delete
A "`friend-delete`" event is sent when the user has either been removed as a friend, or has removed someone else as a friend.

```json
{
    "type": "friend-delete",
    "content": {
        "userId": ":userId"
    }
}
```

#### friend-online
A "`friend-online`" event is sent when one of the user's friends has gone online in-game. Note that the "`world`" field will be an empty object when the friend is on orange/red, or is in a private world.

```json
{
    "type": "friend-online",
    "content": {
        "userId": ":userId",
        "platform": ":platformString",
        "location": ":locationString",
        "canRequestInvite": <boolean>,
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        }
    }
}
```

#### friend-active
A "`friend-active`" event is sent when one of the user's friends is active on the website.

```json
{
    "type": "friend-active",
    "content": {
        "userid": ":userId",
        "platform": ":platformString", // Appears only to be "web" from these events
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        }
    }
}
```

#### friend-offline
A "`friend-offline`" event is sent when one of the user's friends has gone offline.

```json
{
    "type": "friend-offline",
    "content": {
        "userId": ":userId",
        "platform": ":platformString", // Appears only to be empty "" from these events
    }
}
```

#### friend-update
A "`friend-update`" event is sent when something about one of the user's friends profile has changed.

```json
{
    "type": "friend-update",
    "content": {
        "userId": ":userId",
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        }
    }
}
```


#### friend-location
A "`friend-location`" event is sent when one of the user's friends has changed instances. Note that the `worldId` field will be `"private"` when the friend is on orange/red, or is in a private world.

```json
{
    "type": "friend-location",
    "content": {
        "userId": ":userId",
        "location": ":locationString",
        "travelingToLocation": ":locationString", // normally empty "", but when the above "location" is "traveling", this contains the imminent destination
        "worldId": ":worldId",
        "canRequestInvite": <boolean>,
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        }
    }
}
```

---

### User Events

User events are relating to the current user logged in.

#### user-update
A "`user-update`" event is sent when something regarding the user has been updated. Note that the "`user`" object is **not** a LimitedUser object, even though it has similarities. It's missing `developerType`, `friendKey`, `isFriend`, `last_platform` and `location`. It also has an extra `currentAvatar` field.

```json
{
    "type": "user-update",
    "content": {
        "userId": ":userId",
        "user": {
            "bio": ":bioString",
            "currentAvatar": ":avatarId",
            "currentAvatarImageUrl": ":assetUrl",
            "currentAvatarThumbnailImageUrl": ":assetUrl",
            "displayName": ":displayName",
            "fallbackAvatar": ":avatarId",
            "id": ":userId",
            "profilePicOverride": ":assetUrl",
            "status": ":statusEnum",
            "statusDescription": ":statusString",
            "tags": [
                ":tag"
            ],
            "userIcon": ":assetUrl",
            "username": ":username"
        }
    }
}
```


#### user-location
A "`user-location`" event is sent when the user has changed instances.

```json
{
    "type": "user-location",
    "content": {
        "userId": ":userId",
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        },
        "location": ":locationString",
        "instance": ":instanceId", // This is locationString without the World ID part.
        "worldId": ":worldId",
        "world": {
            // <World Object>, See return data of World API:
            // https://vrchatapi.github.io/docs/api/#get-/worlds/-worldId-
        }
    }
}
```


#### user-badge-assigned
A "`user-badge-assigned`" event is sent when the user obtains a badge, such as for subscribing to VRChat+.

```json
{
    "type": "user-badge-assigned",
    "content": {
        "badge": ":badge"
    }
}
```


#### user-badge-unassigned
A "`user-badge-unassigned`" event is sent when the user loses a badge, such a VRChat+ subscription expiring.

```json
{
    "type": "user-badge-unassigned",
    "content": {
        "badgeId": ":badgeId"
    }
}
```


#### content-refresh
A "`content-refresh`" event is sent when the user adds or removes profile images etc.

```json
{
    "type": "content-refresh",
    "content": {
        "contentType": ":contentRefreshContentTypeEnum",
        "actionType": ":contentRefreshActionTypeEnum"
    }
}
```


#### instance-queue-joined
A "`instance-queue-joined`" event is sent when the user queues to join an instance.

```json
{
    "type": "instance-queue-joined",
    "content": {
        "instanceLocation": ":locationString",
        "position": <number> // Integer position in queue
    }
}
```


#### instance-queue-ready
A "`instance-queue-ready`" event is sent when the user is at the front of the queue.

```json
{
    "type": "instance-queue-ready",
    "content": {
        "instanceLocation": ":locationString",
        "expiry": ":dateTimeString" // Time at which priority will be lost
    }
}
```

---

### Group Events

#### group-joined
A "`group-joined`" event is sent when the user has either joined a group, or has had one of their group join requests accepted.

```json
{
    "type": "group-joined",
    "content": {
        "groupId": ":groupId" // grp_00000000-0000-0000-000000000000
    }
}
```


#### group-left
A "`group-left`" event is sent when the user has either left a group, or has been removed from a group.

```json
{
    "type": "group-left",
    "content": {
        "groupId": ":groupId"
    }
}
```


#### group-member-updated
A "`group-member-updated`" event is sent when something regarding the user's group membership changes. Note that the optional values in the `member` are as if "fetching a specific user", per the schema description.

```json
{
    "type": "group-member-updated",
    "content": {
        "member": {
            // <GroupLimitedMember Object>, See return data of Groups API:
            // https://vrchatapi.github.io/docs/api/#get-/groups/-groupId-/members/-userId-
        }
    }
}
```


#### group-role-updated
A "`group-role-updated`" event is sent when something regarding one of the user's group's roles changes.

```json
{
    "type": "group-role-updated",
    "content": {
        "role": {
            // <GroupRole Object>, See return data of Groups API:
            // https://vrchatapi.github.io/docs/api/#get-/groups/-groupId-/roles
        }
    }
}
```
