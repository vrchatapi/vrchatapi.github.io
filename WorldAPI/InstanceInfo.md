# Instance Info

This API allows to get info about the instance.

## Request Method 
GET

## Endpoint
All users 
https://api.vrchat.cloud/api/1/worlds/:worldId/:instanceId

worldId - the world id
instanceId - the instance id

## Requires Authentication
Yes

# Parameter

Field | Type | Optional | Description
------|------|----------|------------
search | string | yes | Username to search for
developerType | `DeveloperType` | yes | Active user by developer type, `none` for normal users and `internal` for moderators
n | int | yes | How many users to return
offset | int | yes | How many users to skip

## Returns 

Field | Type | Description
------|------|------------
id | string | the instance id
private | boolean | is this a private instance
friends | boolean | is this a friends only instance
users | `Users` | the users in this instance
name | string | from what I saw it is the same as the instance id

### Users

array of users, same as (same one as returned by the [List Users](UserAPI/List.md) Endpoint) with the addition of 

Also each user also has it's `networkSessionId`. I assume it is the Photon network id, but I will have to investigate to confirm.