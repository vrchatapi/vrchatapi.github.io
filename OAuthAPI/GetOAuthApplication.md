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
id | string | Application id
company | string | Сompany name
name | string | Application name
endpoint | string | Return point on successful user authorization
scopes | object | Scopes application
thumbnail | string | Application thumbnail