# Friend Online Event

This event fires when a friend's location changes

## Structure

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

## Notes

The world object returned by this event is usually incomplete  
Keys such as occupants and visits are often excluded.

If the instance is private or invite only:
    - world will be an empty object
    - location will be "private"
    - instance will be "private"
