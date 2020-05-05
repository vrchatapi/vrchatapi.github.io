# Login

This API allows you to get user data from a VRChat account

## Request Method
GET

## Endpoint
    https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
Yes (see the [Mozilla Developer page](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) for more informations)

## Returns

[`Current User object`](Objects/User.md?id=current-user-object)

The endpoint also returns an auth cookie that can be used until the socket is disconnected from the web server
