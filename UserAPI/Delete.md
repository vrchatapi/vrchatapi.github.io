# Delete

Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.

**VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.

**METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.

## Request Method
PUT

## Endpoint
    https://api.vrchat.cloud/api/1/user/[ID]/delete

## Requires Authentication
No (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

[`Current User object`](/Objects/User.md#current-user-object)
