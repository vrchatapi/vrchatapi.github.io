# Objects

## unityPackage object

```diff
- unityPackage objects look to be separate truncated versions of their parenting objects (World object, Avatar object, etc)
```

Key | Type | Description
----|------|------------
id | string | unityPackage ID of this unity package (prefixed by 'unp')
platform | string | platform of parenting object
assetUrl | string | assetUrl of parenting object
unityVersion | string | unityVersion of parenting object
unitySortNumber | integer | unityVersion in a number format
assetVersion | integer | assetVersion of parenting object
