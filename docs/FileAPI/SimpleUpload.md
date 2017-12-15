# Simple Upload

This is a way to upload a simple file to the server.
Should call Upload finish after this request.

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method 
PUT

## Endpoint
https://api.vrchat.cloud/api/1/file/:id/:version/type/start

id - the id of the file
version - the version of the file
type - the file type

### File Types

    - file
    - delta 
    - signature

## Requires Authentication
Yes

## Parameters

Just send the content you want to put in the file

## Returns

*soon*