# Get World

This API allows you to get information about a world

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/worlds/:id

id - the world id

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
id | string | World ID
name | string | World Name
description | string | World description
featured | boolean | Is the world featured
authorId | string | The user ID of the creator
authorName | string | The name of the creator
totalLikes | int | How many likes this world has
totalVisits | int | How many visits this world has
capacity | short | The maximum amount of people in an instance
tags | array of string | World tags
releaseStatus | `ReleaseStatus` | The status of the world
imageUrl | string | URL to the image of the world
thumbnailImageURL | string | URL to the image of the world (small)
pluginUrl | string | URL (usually DLL). This is probably used for custom scripts, only found in worlds made by vrchat currently
unityPackageUrl | string | URL for downloading unity3d compressed file (not always included)
namespacae | string | unknown
unityPackageUpdated | false | unknown
unityPackages | `UnityPackage` | Versions of this world
isSecure | boolean | unknown (probably password?)
isLockdown | boolean | unknown (probably makes the world to be locked)
version | int | World version
organization | string | unknown
instances | `Instance` | The instances of this world
occupants | int | Total amount of people in this world

### ReleaseStatus

    - public
    - private 
    - all
    - hidden

### UnityPackage

Field | Type | Description
------|------|------------
id | string | The unity package id
assetUrl | string | url with the assets used in the world
pluginUrl | string | url to the plugin
unityVersion | string | Version of unity the package was created with
unitySortNumber | int | Unity version formatted into a number (?)
assetVersion | int | Version of that asset
platform | string | For what platform
created_at | string (date) | the date the world was created at

### Instance

Index | Type | Description
------|------|------------
0 | string | Instance id
1 | int | people in that instance (?)