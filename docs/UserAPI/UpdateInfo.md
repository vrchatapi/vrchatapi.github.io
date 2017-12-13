# Update Info

It is worthy to mention there is no real login, since we are using Basic authentication then you are always authenticated as long as you send the header.

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/users/:id

id - The current user id

## Requires Authentication
Yes

## Parameters

Field | Type | Optional? | Description
------|------|-----------|------------
email | string | yes | New Email
birthday | string | yes | New Birthday
acceptedTOSVersion | int |  unknown | The last accepted TOS version

## Usage
Used to update user information such as the email and birthday.

This is probably also used when accepting new TOS.

## Example response

*soon*