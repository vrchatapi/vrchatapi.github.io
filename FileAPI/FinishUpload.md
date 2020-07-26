# Finish Upload

This is to finish an upload to a file

!> I was facing some problems testing the File API, so it is best not to use it

## Request Method
PUT

## Endpoint &lt;ID&gt;
https://api.vrchat.cloud/api/1/file/[ID]/[VERSION]/[TYPE]/finish

id - the id of the file
version - the version of the file
type - the file type

### File Types

    - file
    - delta
    - signature

## Requires Authentication
Yes (See [here](Authorization.md) for details)

## Returns
