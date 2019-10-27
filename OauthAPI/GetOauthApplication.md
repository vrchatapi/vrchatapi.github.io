# Get Oauth Application

This API allows you to get information about a Oauth application.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/oauth/[ID]

id - the application id

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
company | string | Сompany name
endpoint | string | Return point on successful user authorization
id | string | Application id
name | string | Application name
scopes | object | Scopes application
thumbnail | string | Application thumbnail
 date the world was created at