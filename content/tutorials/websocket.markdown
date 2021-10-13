---
title: Websocket API
category: general
difficulty: hard
---

The VRChat Websocket API is used receiving updates regarding the API, such as a friend has been added an invite received.
The WebSocket is **receive-only**, meaning that you can only listen for messages. Sending messages is undefined behavior.

## Connecting

Connecting to the VRChat webhook server is done via the URL:
`wss://pipeline.vrchat.cloud/?authToken=authcookie_...`

The auth-token query parameter is the authorization cookie you receive when logging into VRChat.

## Message structure

Messages through VRChat's Websocket API are delivered as strings.
For example, the friend-offline event would be formated as:

```js
"{content:\"{\"userId\": \"usr_...\"}\"}"
```

After parsing the message:

```js
{
    "content": "{\"userId\": \"usr_...\"}",
    "type": "friend-offline"
}
```

The value of content is **also** delivered as a string.
To get the full payload it is required to **again** parse the contents of `content`:

```js
{
    "content": {
        "userId": "usr_..."
    },
    "type": "friend-offline"
}
```

## Events

### Friend Online Event

```js
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>
    },
    "type": "friend-online"
}
```

### Friend Offline Event

```js
{
    "content": {
        "userId": "<userId>"
    },
    "type": "friend-offline"
}
```

### Friend Active Event

```js
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>
    },
    "type": "friend-active"
}
```

### Friend Add Event

```js
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>
    },
    "type": "friend-add"
}
```

### Friend Delete Event

```js
{
    "content": {
        "userId": "<userId>"
    },
    "type": "friend-delete"
}
```

### Friend Update Event

```js
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>
    },
    "type": "friend-update"
}
```

### Friend Location Event

```js
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>,
        "world": <worldObject>,
        "location": "<worldId:locationId>",
        "instance": "<locationId>",
        "canRequestInvite": <boolean>
    },
    "type": "friend-location"
}
```

### Notification Received Event

Notifications are used for e.g. Invites, Friend Requests, Invite Requests and Invite Responeses.

```js
{
    "content": <notificationObject>,
    "type": "notification"
}
```

### Notification Seen Event

Lets the listener know a notification has been marked as seen.

```js
{
    "content": <notificationId>,
    "type": "see-notification"
}
```

### Notification Response

Similar to `Notification Received Event`, except this carries an ID (`responseId`) of the notificaiton (which is required to fetch seperately) that was sent in response to an earlier notification (`notificationId`). This is used e.g., when responding to an Invite.

```js
{
    "content": {
        "notificationId": <notificationId>,
        "receiverId": <userId>,
        "responseId": <notification>
    },
    "type": "response-notification"
}
```
