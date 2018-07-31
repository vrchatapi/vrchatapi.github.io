# Simple Upload

This is a way to upload a simple file to the server.
Should call Upload finish after this request.

You must create a version first before actually starting the upload

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/file/`<ID>`/`<VERSION>`/`<TYPE>`/start?partNumber=`<PARTNUMBER>`

id - the id of the file
version - the version of the file
type - the file type
partNumber - optional, for larger files it allows to do a multiplart upload

### File Types

    - file
    - delta 
    - signature

## Requires Authentication
Yes

## Returns

