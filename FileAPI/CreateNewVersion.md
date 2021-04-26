# Create new version

Create new file version

This requires a signature and delta/file

The file is the actual data
The signature is unknown
The delta is unknown

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method
POST

## Endpoint
    https://api.vrchat.cloud/api/1/file/[ID]


ID - the file id

## Parameters

Field | Type | Optional | Description
-----|------|----------|-------------
signatureMd5 | base64 string | no | signature md5 checksum
signatureSizeInBytes | long | no | signature size in bytes

### These depends on upload type

Must provide one of the following

#### Full

Field | Type | Description
-----|------|-------------
deltaMd5 | base64 string | delta md5 checksum
deltaSizeInBytes | long | delta size in bytes

#### Delta
Field | Type | Description
-----|------|-------------
fileMd5 | base64 string | file md5 checksum
fileSizeInBytes | long | file size in bytes

## Requires Authentication
Yes  (See [here](/Authorization.md) for details)

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
