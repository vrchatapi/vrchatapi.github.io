# Get World Feedback

?> For Beta Client `2018.2.3_openbeta`

This API allows you to get all the feedback for a world.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/worlds/[WORLDID]/[WORLDREVISION]/feedback

WORLDID - The world id you want to fetch info about

WORLDREVISION - The revision of the world you want to fetch info about.

## Requires Authentication
Yes

## Returns 

Field | Type | Description
------|------|------------
positiveScore | int | The number of upvotes
negativeScore | int | The number of downvotes
tagScore | int | Unknown
positiveReasons | JSONArray | Array of feedback strings
negativeReasons | JSONArray | Array of feedback strings
reportReasons | JSONArray | Array of feedback strings
prospectiveTags | JSONArray | Array of tag strings
