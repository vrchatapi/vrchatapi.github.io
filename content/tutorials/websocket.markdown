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
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        },
        "location": ":locationString", // Refer to https://vrchatapi.github.io/tutorials/instances/
        "instance": ":instanceId", // This is locationString without the World ID part.
        "world": {
            // <World Object>, See return data of World API:
            // https://vrchatapi.github.io/docs/api/#get-/worlds/-worldId-
            //
            // NOTE: WILL BE EMPTY if user is on orange/red, or is in a private world.
        },
        "canRequestInvite": <boolean>
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
        "userId": ":userId"
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
A "`friend-location`" event is sent when one of the user's friends has changed instances. Note that the "`world`" field will be an empty object when the friend is on orange/red, or is in a private world.

```json
{
    "type": "friend-location",
    "content": {
        "userId": ":userId",
        "user": {
            // <User Object>, See return data of User API:
            // https://vrchatapi.github.io/docs/api/#get-/users/-userId-
        },
        "location": ":locationString", // Refer to https://vrchatapi.github.io/tutorials/instances/
        "instance": ":instanceId", // This is locationString without the World ID part.
        "world": {
            // <World Object>, See return data of World API:
            // https://vrchatapi.github.io/docs/api/#get-/worlds/-worldId-
            //
            // NOTE: WILL BE EMPTY if user is on orange/red, or is in a private world.
        },
        "canRequestInvite": <boolean>
    }
}
```

---

### User Events

User events are relating to the current user logged in.

#### user-update
A "`user-update`" event is sent when something regarding the user has been updated. Note that the "`user`" object is **not** a LimitedUser object, even though it has similarities. It's missing `developerType`, `friendKey`, `isFriend`, `last_platform` and `location`. It also has extra `currentAvatar` and `currentAvatarAssetUrl` fields.

```json
{
    "type": "user-update",
    "content": {
        "userId": ":userId",
        "user": {
            "bio": ":bioString",
            "currentAvatar": ":avatarId",
            "currentAvatarAssetUrl": ":assetUrl",
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
        "location": ":locationString", // Refer to https://vrchatapi.github.io/tutorials/instances/
        "instance": ":instanceId", // This is locationString without the World ID part.
        "world": {
            // <World Object>, See return data of World API:
            // https://vrchatapi.github.io/docs/api/#get-/worlds/-worldId-
        }
    }
}
```
