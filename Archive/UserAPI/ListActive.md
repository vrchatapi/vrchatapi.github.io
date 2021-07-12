!> **Archive notice** This endpoint was restricted sometime in first half of 2021. It now always requires Admin Credentials.

# Search Active

This API allows you to list active users and use some filters to filter them.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/users/active

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

# Parameter

Field | Type | Optional | Description
------|------|----------|------------
search | string | no | Username to search for
developerType | `DeveloperType` | yes | Active user by developer type, `none` for normal users and `internal` for moderators
n | int | yes | How many users to return
offset | int | yes | How many users to skip

## Returns

Array of [`Limited User objects`](/Objects/User.md#limited-user-object)
