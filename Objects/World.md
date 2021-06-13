# Objects

## World object

| Field                 | Type                   | Description                                                                        |
|-----------------------|------------------------|------------------------------------------------------------------------------------|
| assetUrl              | String                 | URL to the world .vrcw file                                                        |
| assetUrlObject        | JSONArray              | Unknown                                                                            |
| authorId              | String                 | User ID of the author                                                              |
| authorName            | String                 | username of the author                                                             |
| capacity              | String                 | How many users can be inside a single instance of this world                       |
| created_at            | String                 | When the world was originally uploaded                                             |
| description           | String                 | Author defined description of the world                                            |
| favorites             | Integer                | Times this world has been favorited                                                |
| featured              | Boolean                | If VRChat features this world or not                                               |
| heat                  | Integer                | Arbitrary number denoting how popular the world is, but not the same as popularity |
| id                    | String                 | ID of the world                                                                    |
| imageUrl              | String                 | URL to the preview image of the world                                              |
| instances             | Array of Instances     | [`Instance`](/Objects/World.md#instance)                                                                           |
| labsPublicationDate   | String                 | When this world was submitted to Labs                                              |
| name                  | String                 | Name of the world                                                                  |
| namespace             | String                 | Unknown                                                                            |
| occupants             | Integer                | Total number of people in instances of this world                                  |
| organization          | String                 | vrchat                                                                             |
| pluginUrl             | String                 | Unknown                                                                            |
| pluginUrlObject       | JSONArray              | Unknown                                                                            |
| popularity            | Integer                | Arbitrary number denoting how popular the world is                                 |
| publicOccupants       | Integer                | Total number of people in public instances of this world                           |
| publicationDate       | String                 | When world came out of labs and was released                                       |
| releaseStatus         | String                 | [`Release Status`](/Objects/World.md#releasestatus)                                |
| tags                  | Array of strings       | Admin, system, and author defined tags to categorize the world                     |
| thumbnailImageUrl     | String                 | URL to the thumbnail image of the world                                            |
| unityPackageUrl       | String                 | Unknown                                                                            |
| unityPackageUrlObject | JSONArray              | Unknown                                                                            |
| unityPackages         | Array of unityPackages | TODO                                                                               |
| updated_at            | String                 | When world was last updated                                                        |
| version               | Integer                | Current iteration of the world                                                     |
| visits                | Integer                | How many times the world has been visited                                          |


## Limited World object

| Field               | Type                   | Description                                                                        |
|---------------------|------------------------|------------------------------------------------------------------------------------|
| authorId            | String                 | User ID of the author                                                              |
| authorName          | String                 | username of the author                                                             |
| capacity            | Integer                | How many users can be inside a single instance of this world                       |
| created_at          | String                 | Times this world has been favorited                                                |
| favorites           | Integer                | Times this world has been favorited                                                |
| heat                | Integer                | Arbitrary number denoting how popular the world is, but not the same as popularity |
| id                  | String                 | ID of the world                                                                    |
| imageUrl            | String                 | URL to the preview image of the world                                              |
| labsPublicationDate | String                 | When this world was submitted to Labs                                              |
| name                | String                 | Name of the world                                                                  |
| occupants           | Integer                | Total number of people in instances of this world                                  |
| organization        | String                 | vrchat                                                                             |
| popularity          | Integer                | Arbitrary number denoting how popular the world is                                 |
| publicationDate     | String                 |  When world came out of labs and was released                                      |
| releaseStatus       | String                 | [`Release Status`](/Objects/World.md#releasestatus)                                |
| tags                | Array of Strings       | Admin, system, and author defined tags to categorize the world                     |
| thumbnailImageUrl   | String                 | URL to the thumbnail image of the world                                            |
| unityPackages       | Array of unityPackages | TODO                                                                               |
| updated_at          | String                 | When world was last updated                                                        |

## Instance object

| Field            | Type               | Description                                        |
|------------------|--------------------|----------------------------------------------------|
| active           | Boolean            | Unknown                                            |
| canRequestInvite | Boolean            | If user can request an invite to this instance     |
| capacity         | Integer            | Max amount people that can be inside this instance |
| clientNumber     | String             | Unknown                                            |
| full             | Boolean            | If the instance is full                            |
| hidden           | String             | User ID, don't know what its for                   |
| id               | String             | worldId:instanceId                                 |
| instanceId       | String             | ID of the instance                                 |
| location         | String             | worldId:instanceId                                 |
| name             | String             | Instance Short Name                                |
| n_users          | Integer            | Number of users in the instance                    |
| ownerId          | String             | User ID of the instance owner                      |
| photonRegion     | String             | [`Region`](/Objects/World.md#regions)              |
| permanent        | Boolean            | If instance is persistent                          |
| platforms        | Array of Platforms | [`Platforms`](/Objects/World.md#platforms)         |
| region           | String             | [`Region`](/Objects/World.md#regions)              |
| shortName        | String             | Instance short name, used for the vrch.at link     |
| tags             | Array of strings   | Indicates if debugging is allowed                  |
| type             | String             | [`Instance Type`](/Objects/World.md#instancetype)  |
| worldId          | String             | ID of the world                                    |

# Special types

## Release Status

Release Status is a string, being one of the following:
 - "public" World can be played in public and private instances with this releaseStatus
 - "private" World can only be played in a private instance with this releaseStatus
 - "hidden" World has been deleted by its owner, only admin can see a world with this releaseStatus (?)

## Instance

Instance is an array, with the following structure:

| Index | Type    | Description                                             |
|-------|---------|---------------------------------------------------------|
| 0     | string  | [`Instance`](/Objects/World.md#instanceobject) location |
| 1     | integer | Count of users in instance                              |

## Instance ID

The ID of an instance, made up of 3 parts, 1 always present and 2 that depend on the  
[Instance Type](/Objects/World.md#instancetype) and separated with the `~` character.  
It's structure is as follows:  

ID\~[Instance Type](/Objects/World.md#instancetype)(ownerId)\~nonce([Nonce](/Objects/World.md#nonce))~region([Region](/Objects/World.md#region))

The last 2 sections are only appended onto the ID when

### Instance Type

Type of instance. Is used to define who can join the instance.

Types include:
 - "hidden"
 - "friends"
 - "public"

### Nonce

Nonce is the Cryptographic key used to lock non-public instances, and is not included in the location of public instances.
It is formatted as "nonce(key)" where `key` is the cryptographic key

## Platforms

| Field             | Type    | Description                                                 |
|-------------------|---------|-------------------------------------------------------------|
| standalonewindows | Integer | How many standalone windows clients are in the instance     |
| android           | Integer | How many android (oculus quest) clients are in the instance |

## Region

Region indicates the geographical location of the photon servers used for a World [`Instance`](/Objects/World.md#instanceobject).
Selected region is indicated by `~region(eu)` as part of the Instance ID. If no `~region` parameter is provided then `usw` is used by default.

The current known Photon regions are:

| Region    | Hosted in | Token |
|-----------|-----------|-------|
| USA, West | San José  | usw   |
| Europe    | Amsterdam | eu    |
| Japan     | Tokyo     | jp    |
