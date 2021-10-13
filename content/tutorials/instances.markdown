---
title: Instances
category: general
difficulty: medium
---

Instances are parallell "rooms" or "lobbies" of a world.
Each instance can only hold a limited number of users, but there is no limit on how many instances can exist of a world.
Instances are uniquely identified by the combined World ID and Instance ID.

## Instance Generator

{{< instance_generator >}}

## Instance ID

The instance ID is the combined sum of all the arguments to the instance e.g. name, owner, and privacy setting.
The arguments are in the order of name, friends, hidden, private, canRequestInvite, region, nonce.

### Owner ID

Differentiate two concepts, "Instance Owner" and "Instance Master".
The "Owner" of an instance is the creator of the instance, is permanent, and has permission to insta-kick users without having to go through the Voting system.
The "Instance Master" is the Photon sync master and is responsible for object syncing. The Instance Master is whoever has stayed in the instance the longest.

### Nonce

Nonce is the Cryptographic key used to lock non-public instances to prevent people from guessing the Instance ID. It is not included in the location of public instances, and is formatted as "nonce(key)" where key is the cryptographic key.

### Region

Region indicates the geographical location of the Photon servers used for the instance. **Default:** `us`

Region | Hosted in | Token
-------|-----------|------
USA, West | San José | us
Europe | Amsterdam | eu
Japan | Tokyo | jp
