# Save Avatar

This avatar allows you to update avatar information.

!> Only works if the avatar is yours!

## Request Method
Update avatar
    PUT

Create avatar
    POST

## Endpoint
Update avatar
    https://api.vrchat.cloud/api/1/avatars/[ID]

Create avatar
    https://api.vrchat.cloud/api/1/avatars


ID - the user id

## Parameters
Any field in the [avatar](/AvatarAPI/GetByID.md) object

## Requires Authentication
Yes (See [here](/Authorization.md) for details)

## Returns

[`Avatar object`](/Objects/Avatar.md#avatar-object)
