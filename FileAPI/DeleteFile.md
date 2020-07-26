# Delete File

This API allows you to delete files from the server.

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method
DELETE

## Endpoint
https://api.vrchat.cloud/api/1/file/[FILEID]

FILEID - the file id

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Returns

```json
{
    "success": {
        "message":"File deleted",
        "status_code":200
    }
}
```
