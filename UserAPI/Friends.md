# Friends

This API allows you to get information about your friends

## Request Method
GET

## Endpoint
All: https://api.vrchat.cloud/api/1/auth/user/friends

Favorite (Beta): https://api.vrchat.cloud/api/1/auth/user/friends/favorite

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
offset | int | Yes | from where
n | int | Yes | How many (maximum of 100)
offline | boolean | Yes | Should return offline friends

## Returns

Array of [`Limited User objects`](../Objects/User.md)
