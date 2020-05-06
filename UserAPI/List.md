# Search

This API allows you to list users and use some filters to filter them

## Request Method
GET

## Endpoint
All users
    https://api.vrchat.cloud/api/1/users

Active only
    https://api.vrchat.cloud/api/1/users/active

## Requires Authentication
Yes

# Parameter

Field | Type | Optional | Description
------|------|----------|------------
search | string | yes | Username to search for
developerType | `DeveloperType` | yes | Active user by developer type, `none` for normal users and `internal` for moderators
n | int | yes | How many users to return
offset | int | yes | How many users to skip

## Returns

Array of [`Limited User objects`](Objects/User.md?id=limited-user-object)
