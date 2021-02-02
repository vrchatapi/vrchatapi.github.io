# Objects

## Avatar Object

| Field                 | Type                                                                    | Description                                                    |
|-----------------------|-------------------------------------------------------------------------|----------------------------------------------------------------|
| assetUrl              | String                                                                  | URL to the avatar .vrca file                                   |
| assetUrlObject        | JSONArray                                                               | Unknown                                                        |
| authorId              | String                                                                  | User ID of the avatar author                                   |
| authorName            | String                                                                  | username of the avatar author                                  |
| created_at            | String                                                                  | Date-Time the avatar was first uploaded                        |
| description           | String                                                                  | Author defined description of the avatar                       |
| featured              | Boolean                                                                 | If the avatar is featued by VRChat                             |
| id                    | String                                                                  | ID of the avatar                                               |
| imageUrl              | String                                                                  | URL to the preview image of the avatar                         |
| name                  | String                                                                  | Name of the avatar                                             |
| releaseStatus         | String                                                                  | (/Objects/Avatar.md#releasestatus)                             |
| tags                  | Array of strings                                                        | Admin, System, and author defined tags to categorize avatar    |
| thumbnailImageUrl     | String                                                                  | URL to the thumbnail image of the avatar                       |
| unityPackageUrl       | String                                                                  | Unknown                                                        |
| unityPackageUrlObject | JSONArray                                                               | Unknown                                                        |
| unityPackages         | Array of [`UnityPackages`](/Objects/unityPackage.md#unitypackageobject) | [`UnityPackages`](/Objects/unityPackage.md#unitypackageobject) |
| updated_at            | String                                                                  | Time-Date avatar was last updated                              |
| version               | String                                                                  | Version iteration of avatar                                    |

# Special Types

## Release Status

Release Status is a string, being one of the following:
 - "public" Everyone can see and use an avatar with this releaseStatus
 - "private" Only owner can see and use an avatar with this releaseStatus
 - "hidden" Avatar has been deleted by its owner, only admin can see an avatar with this releaseStatus
