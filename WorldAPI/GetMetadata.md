# Get World Metadata

This API allows you to get meta-information about a world
Usually used to live update content in offical maps.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/worlds/[ID]/metadata

id - the world id

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Returns

Field | Type | Description
------|------|------------
id | string | World ID
metadata | JSONArray | metadata, usually objects containing arrays containing strings.
