# Get By ID

This API allows you to get details about any avatar by ID.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/avatars/&lt;ID&gt;

ID - the avatar id

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
id | string | The avatar ID
name | string | The avatar Name
description | string | The avatar's description
authorId | string | Id of the creator
authorName | string | Name of the creator
tags | string | The avatar tags
assetUrl | string | URL to the asset (UnityFS)
imageUrl | string | Image of the avatar
thumbnailImageUrl | string | Image of the avatar (small)
releaseStatus | `ReleaseStatus` | The release status
version | int | Avatar version
featured | boolean | is the avatar featured (not used in-game)
unityPackages | array of `UnityPackage` | The unity packages
unityPackageUpdated | boolean | unknown
unityPackageURL | string | Full unitypackage that can be used in unity as is (.unitypackage). If the avatar is not yours then it will just be empty.

### ReleaseStatus

note that only admins can view `private` and `hidden` avatars

    - public
    - private
    - hidden

### UnityPackage

This represent different versions of the unity asset

Field | Type | Description
------|------|------------
id | string | package ID
assetUrl | string | link to the asset (UnityFS)
unityVersion | string | The version of unity this avatar was created in
unitySortNumber | int | the version as number
assetVersion | int | the version of the asset
platform | string | the platform of the asset
created_at | `data` | the date the asset was created at (Sometimes it is missing)  