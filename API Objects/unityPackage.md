# Objects

## unityPackage object

```diff
! unityPackage objects look to be separate truncated versions or variants of their parenting objects (World object, Avatar object, etc)
```

Key | Type | Description
----|------|------------
id | string | unityPackage ID of this unity package (prefixed by 'unp')
platform | string | platform unityPackage was either made for or uploaded from
assetUrl | string | Bundled unityPackage file url
unityVersion | string | Version of unity unityPackage was uploaded from
unitySortNumber | integer | unityVersion in a number format
assetVersion | integer | Upload version of unityPackage

#### World specific keys

Key | Type | Description
----|------|------------
created_at | string | Time and date world was first uploaded
assetUrlObject | JSONArray | Unknown (Always empty)
pluginUrl | string | URL (usually DLL). This is probably used for custom scripts, only found in worlds made by vrchat. Looks like it's unused currently
pluginUrlObject | JSONArray | Unknown (Always empty)
