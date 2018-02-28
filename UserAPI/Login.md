# Login

The main reason you need this API is to get the `authToken`, it also contain data that is private to the user, like events, friends and so on.

Also this is currently the only way to get a user asset, the public user data does not contains that.


It is worthy to mention there is no real login, since we are using Basic authentication then you are always authenticated as long as you send the header.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/auth/user

## Requires Authentication
No

## Returns
Private user info