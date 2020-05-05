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
