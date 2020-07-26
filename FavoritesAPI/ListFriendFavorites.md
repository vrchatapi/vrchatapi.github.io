# List Friend Favorites

?> For Beta Client `2018.2.3_openbeta`

This API allows you to list all the current user's friend favorites.

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user/friends/favorite

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
tag | `TagOptions` | no | The tag group to fetch

### TagOptions

    - group_0
    - group_1
    - group_2

## Returns

Array of [`Limited User objects`](Objects/User.md?id=limited-user-object)
