```diff
! "Boxed in" types are listed separately below relevant objects listed in this file.
```

# Objects

## Avatar object

Key | Type | Description
----|------|------------
name | string | Name of avatar
description | string | Avatar's description
id | string | Avatar ID (prefixed by 'avtr')
authorName | string | Name of user who created avatar
authorId | string | User ID of user who created avatar (prefixed by 'usr')
tags | array | Array of user defined tags (max of 5)
version | integer | Upload version of avatar
featured | boolean | If the avatar is featured
created_at | string | Date and time avatar was first uploaded
updated_at | string | Date and time avatar was last uploaded
releaseStatus | `ReleaseStatus` | Release status of avatar
assetUrl | string | Bundled avatar file url
assetVersion | string | Unknown
assetUrlObject | JSONArray | Unknown (Returns empty) - Only returns if you are authenticated and own the avatar
platform | string | Platform avatar was uploaded from
imported | boolean | Unknown
imageUrl | string | Cover image of avatar
thumbnailImageUrl | string | Small cover image of avatar
unityVersion | string | Version of unity avatar was upload from
unityPackageUrl | string | Full unitypackage file that can be used in unity as is (.unitypackage). Looks to be no longer used
unityPackageUrlObject | JSONArray | Unknown (Returns empty)
unityPackages | array | Array of `unityPackage` objects

# Special types

## ReleaseStatus type

ReleaseStatus is a string, being one of the following:
 - "public" Everyone can see and use an avatar with this releaseStatus
 - "private" Only owner can see and use an avatar with this releaseStatus
 - "hidden" Avatar has been deleted by its owner, only admin can see an avatar with this releaseStatus
