# Objects

## UnityPackage Object

!> unityPackage objects look to be separate truncated versions or variants of their parenting objects (World object, Avatar object, etc)

| Field           | Type      | Description                                                                                 |
|-----------------|-----------|---------------------------------------------------------------------------------------------|
| assetUrl        | String    | Bundled unityPackage file url                                                               |
| assetUrlObject  | JSONArray | Unknown                                                                                     |
| assetVersion    | Integer   | Upload version of unityPackage                                                              |
| id              | String    | unityPackage ID of this unity package                                                       |
| platform        | String    | [`Platform`](/Objects/World.md#platforms) unityPackage was either made for or uploaded from |
| unitySortNumber | Integer   | unityVersion in a number format                                                             |
| unityVersion    | String    | Version of unity unityPackage was uploaded from                                             |

#### World specific keys

| Key             | Type      | Description                            |
|-----------------|-----------|----------------------------------------|
| assetUrlObject  | JSONArray | Unknown                                |
| created_at      | String    | Time and date world was first uploaded |
| pluginUrl       | String    | Unknown                                |
| pluginUrlObject | JSONArray | Unknown                                |
