# Mime Types

VRChat uses the following mime types when uploading files. 

Extension | Mime Type | Description
----------|-----------|-------------
vrcw | application/x-world | This is the extension for world asset
vrca | application/x-avatar | This is the extension for avatar asset
dll | application/x-msdownload | This is for DLLs, right now only found in worlds `pluginUrl`
unitypackage | application/gzip | can be opened by unity and imported to project
gz | application/gzip | never used
jpg | image/jpg | image
png | image/png | image
sig | application/x-rsync-signature | unknown
delta | application/x-rsync-delta | unknown

The default they use for any other file is `application/octet-stream`