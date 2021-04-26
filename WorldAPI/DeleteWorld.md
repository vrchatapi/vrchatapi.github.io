# Delete World

This API allows you to delete a world.

!> This API only works if you own the world.

## Request Method
DELETE

## Endpoint
    https://api.vrchat.cloud/api/1/worlds/[ID]

id - the world's id

## Requires Authentication
Yes (See [here](/GettingStarted/QuickStart?id=authorization) for details)

## Returns

[`World object`](/Objects/World.md#world-object)

*** The returned world object does NOT have these 5 keys ***

 - publicOccupants
 - privateOccupants
 - occupants
 - instances
 - favorites
