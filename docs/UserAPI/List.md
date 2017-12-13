# Search

This API allows you to list users and use some filters to filter them

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/users

## Requires Authentication
Yes

# Parameter

Field | Type | Optional | Description
------|------|----------|------------
search | string | yes | Username to search for
n | int | yes | How many users to return
offset | int | yes | How many users to skip

## Returns 
array of extended public user info