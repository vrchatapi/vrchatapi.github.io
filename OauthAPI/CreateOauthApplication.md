# Create Oauth Application

This API allows you to create Oauth Application, requries moderator/internal developerType or admin_moderator tag.

## Request Method 
POST

## Endpoint
https://api.vrchat.cloud/api/1/oauth

## Requires Authentication
Yes

## Parameters 

Field | Type | Description
------|------|------------
name | string | Application name
company | string | Company name
endpoint | string | Return point on successful user authorization
scopes | string | Scopes application
secret | string | Secret key
thumbnail | string | Application thumbnail

## Return
???