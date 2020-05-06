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
tags | array | Array of world tags (strings) defined by world creator, system and admins
version | integer | Upload version of world
featured | boolean | If world is featured or not
created_at | string | Time and date world was first uploaded
updated_at | string | Time and date world was last uploaded
releaseStatus | [`ReleaseStatus`](Objects/World.md?id=releasestatus-type) | Release status of world
visits | integer | Times world has been visited
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
instances | array | Array of [`Instance`](Objects/World.md?id=instance-type)s
previewYoutubeId | null (?) | Probably something to do with a youtube id for a video that previews a world. Doesn't look to be used currently
publicationDate | string | Time and date world was made public, or 'none'
labsPublicationDate | string | Time and date world was made public using the community labs system, or 'none'
pluginUrl | string | URL (usually DLL). This is probably used for custom scripts, only found in worlds made by vrchat. Looks like it's unused currently
pluginUrlObject | JSONArray | Unknown (Always empty)
unityPackageUrl | string | Full unitypackage file that can be used in unity as is (.unitypackage). Looks to be no longer used
unityPackageUrlObject | JSONArray | Unknown (Always empty)
unityPackages | array | Array of [`unityPackage`](Objects/unityPackage.md?id=unitypackage-object) objects (Probably different variants of the world)

## Limited World object

Key | Type | Description
----|------|------------
name | string | Name of world
id | string | World ID of world (prefixed with 'wrld')
authorName | string | Name of user who created world
authorId | integer | User ID of user who created world
tags | array | Array of world tags (strings) defined by world creator, system and admins
created_at | string | Time and date world was first uploaded
updated_at | string | Time and date world was last uploaded
releaseStatus | [`ReleaseStatus`](Objects/World.md?id=releasestatus-type) | Release status of world
visits | integer | Times world has been visited
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
unityPackages | array | Array of [`unityPackage`](Objects/unityPackage.md?id=unitypackage-object) objects (Probably different variants of the world)

## Instance object

Key | Type | Description
----|------|------------
name | string | Number identifier
id | [`location`](Objects/World.md?id=location) | Instance location (combination of worldId, instanceName, [`instanceType`](Objects/World.md?id=instance-type) and [`nonce`](Objects/World.md?id=nonce))
type | [`instance type`](Objects/World.md?id=instance-type) | Type of instance
active | boolean | If the world is "active" (used often)
n_users | integer | Number of users in the instance
capacity | integer | Maximum number of users that can be in the instance
full | boolean | If the n_users is equal to capacity
canRequstInvite | boolean | Probably if users can ask to be invited to this instance
location | [`location`](Objects/World.md?id=location) | Instance location (combination of worldId, instanceName, [`instanceType`](Objects/World.md?id=instance-type) and [`nonce`](Objects/World.md?id=nonce))
instanceId | [`location`](Objects/World.md?id=location) | Instance location with no worldId (combination of instanceName, [`instanceType`](Objects/World.md?id=instance-type) and [`nonce`](Objects/World.md?id=nonce))
shortName | string | Shorter name used to share instance url (https://vrchat.com/i/shortName)
ownerId | string | Either userId of the instance master, or userId of connecting user to non-public instance
worldId | string | World ID of the world
tags | array | Array of world tags (strings) defined by world creator, system and admins
platforms | JSONArray | Consists of 'standalonewindows' and 'android' keys as integers, count of how many of each platform are in the instance
clientNumber | string | Unknown
photonRegion | string | Unknown
permanent | boolean | Unknown
hidden | string | Unknown

# Special types

## ReleaseStatus type

ReleaseStatus is a string, being one of the following:
 - "public" World can be played in public and private instances with this releaseStatus
 - "private" World can only be played in a private instance with this releaseStatus
 - "hidden" World has been deleted by its owner, only admin can see a world with this releaseStatus (?)

## Instance

Instance is an array, with the following structure:

Index | Type | Description
------|------|------------
0 | string | Instance name (5 character number)
1 | integer | Count of users in instance

## Location

Location is a string made up of possibly multiple parts.
The first part is usually "worldId:instanceName" and sometimes just "instanceName". Other parts are joined using "~" as a separator

### Instance type

Signifies the type of instance. If the instance is public then the location won't have this.
It is formated as "type(connectingUserId)" where connectingUserId is the id of the user that allows you to join the instance

Types include:
 - "hidden"
 - "friends"

### Nonce

Nonce is the Cryptographic key used to lock non-public instances, and is not included in the location of public instances.
It is formatted as "nonce(key)" where the key is the cryptographic key
