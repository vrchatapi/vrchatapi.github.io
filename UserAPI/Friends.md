# Friends

This API allows you to get information about your friends

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/friends

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
offset | int | Yes | from where
n | int | Yes | How many
offline | boolean | Yes | Should return online friends

## Returns 
array of users, same as (same one as returned by the [List Users](UserAPI/List.md) Endpoint)