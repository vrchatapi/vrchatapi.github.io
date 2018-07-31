# Get File

This API allows you to get file info from the server.

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/file/`<FILEID>`

fileId - the file id

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|-------------
id | string | The file's id
name | string | File name
ownerId | string | The user created the file
mimeType | string | the file's mime type
extension | string | The file's extension
versions | array of `Version` | The file versions

### Version

Field | Type | Description
------|------|-------------
version | int | File version
status | `UploadStatus` | The upload status
created_at | string (date) | The time the user was created
file | `FileMetadata` | The file metadata
delta | `FileMetadata` | The delta metadata
signature | `FileMetadata` | The signature metadata

### UploadStatus

* waiting - waiting for upload
* complete - completed upload
* none - probably just not relevant

### FileMetadata

Field | Type | Description
------|------|-------------
fileName | string | The full file name (`<name>.file_<id>.<extension>.<type>`)
url | string | The file url probably
md5 | string | The md5 signature
sizeInBytes | long | The size of the files in bytes
status | `UploadStatus` | The upload status
category | string | unknown
uploadId | string | unknown
cdns | array of string | probably other copies of the files in other cdns