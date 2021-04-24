# List Avatars

This API allows you to get public user info about a specific user using his ID

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/avatars

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|------------
user | `UserOptions` | yes | to who the avatar belongs
featured | boolean | yes | is featured (public avatars)
tag | string | yes | tags
n | int | yes | How many users to return
offset | int | yes | How many users to skip
order | `OrderOptions` | yes | how to order
releaseStatus | `ReleaseStatus` | yes | The release status, defaults to public
sort | `SortOptions` | yes | how to sort
maxUnityVersion | string | yes | The max unity version the world support
minUnityVersion | string | yes | The min unity version the world support
maxAssetVersion | string | yes | The max asset version the world support
minAssetVersion | string | yes | The min asset version the world support
platform | string | yes | The platform the world support

## OrderOptions

    - ascending
    - descending

### UserOptions

    - me

### SortOptions

    - created
    - updated
    - order
    - _created_at
    - _updated_at

### ReleaseStatus

    - public
    - private
    - hidden
    - all

## Returns

Array of [`Avatar objects`](/Objects/Avatar.md#avatar-object)
