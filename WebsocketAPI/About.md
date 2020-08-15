# Websocket API Details

## Connecting

Connecting to the VRChat webhook server is done via this URI:  
`wss://pipeline.vrchat.cloud/?authToken=authcookie_...`

The auth-token query parameter is the authorization cookie you receive when logging into VRChat

## Message structure

Messages through VRChats websocket API are delivered as strings.  
For example, the [friend-offline event](WebsocketAPI/FriendOfflineEvent.md)
would be formated as:

```JSON
"{content:\"{\"userId\": \"usr_...\"}\"}"
```

After parsing the message, we get this:

```js
{
    "content": "{\"userId\": \"usr_...\"}",
    "type": "friend-offline"
}
```

As you can see, the value of content is also delivered as a string.  
This means we have to parse the value of content as well to get the full payload of:

```js
{
    "content": {
        "userId": "usr_..."
    },
    "type": "friend-offline"
}
```
