# Unfriend

This API allows you to unfriend a friend

If the id is of user who is not your friend, an error will be returned.

## Request Method
DELETE

## Endpoint
    https://api.vrchat.cloud/api/1/auth/user/friends/[ID]

id - the id of the user to unfriend

## Requires Authentication
Yes (See [here](/Authorization.md) for details)

## Returns

Success/Error:

on success:
```json
{
    "success": {
            "message": "Friendship destroyed",
            "status_code": 200
        }
}
```

on error
```json
{
    "error": {
        "message": "These users are not friends",
        "status_code": 400
    }
}
```
