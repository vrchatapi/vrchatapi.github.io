# Get Instance With Tags
This API allows you to fetch an instance by passing the instanceid with tags from the world api or the user (location) api

## Request Method
GET

## Endpoint
    https://api.vrchat.cloud/api/1/worlds/[ID]/[INSTANCEID]
    https://api.vrchat.cloud/api/1/instances/[ID]:[INSTANCEID]

id - the world id

instanceid - "instanceName" followed by [`Location type`](/Objects/User.md#instance-type) and [`Nonce`](/Objects/User.md#nonce) (if applicable)

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

[`Instance object`](/Objects/World.md#instance-object)
