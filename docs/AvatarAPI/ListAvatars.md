# List Avatars

This API allows you to get public user info about a specific user using his ID

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/avatars

id - the user id

## Requires Authentication
Yes

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
user | string | yes | set to `me` to only see your avatars
featured | boolean | yes | is featured (public avatars)
tag | string | yes | tags
search | string | yes | Search by name
n | int | yes | How many users to return
offset | int | yes | How many users to skip
order | string | yes | ascending/descending
releaseStatus | string | yes - default is public | The realse status
maxUnityVersion | string | yes | The max unity version the world support
minUnityVersion | string | yes | The min unity version the world support
maxAssetVersion | string | yes | The max asset version the world support
minAssetVersion | string | yes | The min asset version the world support
platform | string | yes | The platform the world support

## Returns 
Array of Avatars