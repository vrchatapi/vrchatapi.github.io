# Delete

This API allows you to delete your account.
Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.

## Request Method
PUT

## Endpoint
    https://api.vrchat.cloud/api/1/user/[ID]/delete

## Requires Authentication
No (See [here](Authorization.md) for details)

## Returns

[`Current User object`](Objects/User.md?id=current-user-object)
