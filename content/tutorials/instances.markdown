---
title: Instances
category: general
difficulty: medium
---

Instances are parallel "rooms" or "lobbies" of a world.
Each instance can only hold a limited number of users, but there is no limit on how many instances can exist of a world.
Instances are uniquely identified by the combined World ID and Instance ID.

*Note: as of 2024-05-02, VRChat indicated in [a Developer Update](https://ask.vrchat.com/t/developer-update-2-may-2024/24284#changes-to-instance-apis-and-auto-creation-13) an eventual intent to replace the current system with a UUID-ish system similar to User IDs*

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
USA, East | Washington D.C. | use
Europe | Amsterdam | eu
Japan | Tokyo | jp

### Special Values

The VRChat API has several sentinel values for location strings:

- `""` Pseudo-null value
- `"offline"` Implies a user currently is not either running the VRChat client or connected to the Pipeline (e.g., browser tab open)
- `"traveling"` Indicates a user's client is travelling between instances (e.g., downloading world, synchronizing world state)
- `"private"` Indicates a user's location is not visible to the currently logged-in user. (e.g., Ask Me/Do Not Disturb status, Invite/Invite+/Group instance)
