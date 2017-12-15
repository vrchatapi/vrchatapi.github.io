# Delete File

This API allows you to delete files from the server.

## Request Method 
DELETE

## Endpoint
https://api.vrchat.cloud/api/1/file/:fileId

fileId - the file id

## Requires Authentication
Yes

## Returns 

```json
{
    "success": {
        "message":"File deleted",
        "status_code":200
    }
}
```