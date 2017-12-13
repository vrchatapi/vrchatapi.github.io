# List Active

This API allows you to get all the users online

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/users/active

## Requires Authentication
Yes

# Parameters

Field | Type | Optional | Description
------|------|----------|------------
developerType | `DeveloperType` | yes | Active user by developer type, `none` for normal users and `internal` for moderators
n | int | yes | How many users to return
offset | int | yes | How many users to skip

The default count is 10

## Returns 
array of extended public user info