# Friend Status

This API allows you to get the status of a friend.

## Request Method
GET

## Endpoint
    https://api.vrchat.cloud/api/1/user/[ID]/friendStatus

id - the id of the user to get status for

## Requires Authentication
Yes (See [here](/Authorization.md) for details)

## Returns

A JSON object containing:

Field | Type | Description
------|------|------------
isFriend | bool | Is the user already a friend?
outgoingRequest | bool | You sent a friendrequest.
incomingRequest | bool | You have an incoming friendrequest.
