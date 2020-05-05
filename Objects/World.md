```diff
! Special types are listed separately below relevant objects in this file.
```

# Objects

## World object

Key | Type | Description
----|------|------------
name | string | Name of world
description | string | Description of world
id | string | World ID of world (prefixed with 'wrld')
authorName | string | Name of user who created world
authorId | integer | User ID of user who created world
tags | array of strings | Tags defined by creator, system and admin
version | integer | Upload version of world
featured | boolean | If world is featured or not
created_at | string | Time and date world was first uploaded
updated_at | string | Time and date world was last uploaded
releaseStatus | `ReleaseStatus` | Release status of world
vists | integer | Times world has been visited
publicOccupants | integer | Current users in public instances of this world
privateOccupants | integer | Current users in private instances of this world
occupants | integer | Total current users in instances of this world
capacity | integer | User capacity for instances of this world
favorites | integer | Number of times world has been favorited
popularity | integer | How popular the world is (Unknown what max and min popularity are)
assetUrl | string | Bundled world file url (.vrcw)
assetUrlObject | string | Unknown (Always empty)
imageUrl | string | Cover image of world
thumbnailImageUrl | string | Small cover image of world
organization | string | Unknown
heat | integer | Unknown (Looks to be connected to popularity somehow)
namespace | string | Unknown
instances | array | Array of `Instance`s
previewYoutubeId | null (?) | Probably something to do with a youtube id for a video that previews a world. Doesn't look to be used currently
publicationDate | string | Time and date world was made public, or 'none'
labsPublicationDate | string | Time and date world was made public using the community labs system, or 'none'
pluginUrl | string | URL (usually DLL). This is probably used for custom scripts, only found in worlds made by vrchat. Looks like it's unused currently
pluginUrlObject | JSONArray | Unknown (Always empty)
unityPackageUrl | string | Full unitypackage file that can be used in unity as is (.unitypackage). Looks to be no longer used
unityPackageUrlObject | JSONArray | Unknown (Always empty)
unityPackages | array | Array of `unityPackage` objects (Probably different variants of the world)

## Limited World object

Key | Type | Description
----|------|------------
name | string | Name of world
id | string | World ID of world (prefixed with 'wrld')
authorName | string | Name of user who created world
authorId | integer | User ID of user who created world
tags | array of strings | Tags defined by creator, system and admin
created_at | string | Time and date world was first uploaded
updated_at | string | Time and date world was last uploaded
releaseStatus | `ReleaseStatus` | Release status of world
vists | integer | Times world has been visited
occupants | integer | Current people in instances of this world
capacity | integer | User capacity for instances of this world
favorites | integer | Number of times world has been favorited
popularity | integer | How popular the world is (Unknown what max and min popularity are)
imageUrl | string | Cover image of world
thumbnailImageUrl | string | Small cover image of world
organization | string | Unknown
heat | integer | Unknown (Looks to be connected to popularity somehow)
publicationDate | string | Time and date world was made public, or 'none'
labsPublicationDate | string | Time and date world was made public using the community labs system, or 'none'
unityPackages | array | Array of `unityPackage` objects

# Special types

## ReleaseStatus type

ReleaseStatus is a string, being one of the following:
 - "public" World can be played in public and private instances with this releaseStatus
 - "private" World can only be played in a private instance with this releaseStatus
 - "hidden" World has been deleted by its owner, only admin can see a world with this releaseStatus (?)

## Instance type

Instance is an array, with the following structure:

Index | Type | Description
------|------|------------
0 | string | Instance name (5 character number)
1 | integer | Count of users in instance