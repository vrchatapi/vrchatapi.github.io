# Create File

This API allows you to create files on the server.

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method
POST

## Endpoint
https://api.vrchat.cloud/api/1/file

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Parameters

Field | Type | Optional | Description
------|------|----------|-------------
name | string | No | The file name
mimeType | string | Can be empty | The file's mime type
extension | string | Can be empty | The file's extension

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
status | string | The upload status (?)
created_at | string (date) | The time the user was created
