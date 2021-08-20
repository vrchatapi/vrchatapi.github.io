---
layout: tutorial
permalink: /tutorials/tags
title: Tags
category: general
difficulty: medium
links:
    - title: VRChat Safety and Trust System
      url: https://medium.com/@vrchat/vrchat-safety-and-trust-system-4073f05ab602
    - title: "VRChat Safety and Trust System: Changes and Feedback"
      url: https://medium.com/@vrchat/vrchat-safety-and-trust-system-changes-and-feedback-a3a9e54ec572
    - title: Why "Legendary" might not be a rank after all
      url: https://github.com/vrchatapi/vrchatapi.github.io/pull/74
---

Tags are a way to grant access, assign restrictions, or attach other kinds of metadata to various to objects e.g. worlds, users and avatars.
These tags are in the form of simple strings, grouped together in a string array, and commonly prefixed with a namespace designating the type of tag.

Tags starting with `admin_` are always assigned to the user manually by a staff. Tags starting with `system_` are automatically assigned by the system.

## User Tags

Tag | Description
----|------------
`admin_scripting_access` and `system_scripting_access` | User can upload user-made scripts (Deprecated)
`admin_moderator` | VRChat staff and have Moderator permissions
`admin_lock_tags` | User's tags have been locked and cannot be edited by the user
`admin_lock_level` | User's Trust rank has been locked and can no longer be changed automatically
`admin_can_grant_licenses` | WIP (#35)
`admin_official_thumbnail` | Replaces the users profile picture with the VRChat logo
`system_avatar_access` and `admin_avatar_access` | User can upload and publish Avatars
`system_world_access` and `admin_world_access` | User can upload and publish Worlds
`system_feedback_access` | User can send Feedback
`system_probable_troll` | User has been reported multiple times and is (probably) a troll
`system_troll` | User is a confirmed troll
`system_supporter` | User has an active VRC+ subscription
`system_early_adopter` | User bought VRC+ in the early period of when it came out
`system_legend` | User is an Experienced player and was active during the Summer of 2018<br>(Deprecated: can no longer be achieved)
`system_trust_basic` | User is "New User" (blue) Trust rank
`system_trust_known` | User is "User" (green) Trust rank
`system_trust_intermediate` | Unknown (Believed to be Deprecated)
`system_trust_trusted` | User is "Known User" (orange) Trust rank
`system_trust_advanced` | Unknown (Believed to be Deprecated)
`system_trust_veteran` | User is "Trusted User" (purple) Trust rank
`system_trust_legend` | User is "Veteran User" (previously gold) Trust rank
`show_social_rank` | Shows the users Trust rank in-game

Trust rank tags have an offset of 1 with their name, so `system_trust_trusted` is actually only `Known User` (orange). The arrows in the following picture highlight the offset naming inaccuracy. The naming system is because of legacy reasons. Visistors have no trust rank at all. It is common for people User and above to be missing the tag for New User.

![Trust ranks](https://i.imgur.com/dBoxDVG.png){:.rounded.w-50.mx-auto.d-block}

## World Tags

Tag | Description
----|------------
`author_tag_*` | Custom tag added by the world author, with the last word being anything; used during searching by tag
`author_tag_avatar` | World will show up in "Avatar Worlds" row
`author_tag_game` | World will show up in the "Games" world row
`admin_featured` and `content_featured` | World has been manually selected by staff to appear in the "Featured" world category
`admin_approved` | World has been manually approved by staff
`admin_avatar_world` | World was manually been selected by staff as avatar world (Deprecated)
`admin_community_spotlight` | World has been manually selected by staff to appear in "Spotlight" row
`admin_hidden` | World will always be hidden from search
`admin_hide_active` | World will be hidden from "Active" row
`admin_hide_new` | World will be hidden from "Recently Updated Worlds" row when updated
`admin_hide_popular` | World will be hidden from "Popular Worlds" row
`admin_jam_*` | World has been manually selected by staff to appear in the "World Jam" row
`admin_vket*` | Special tag used for Virtual Market worlds to appear in own dedicated row
`system_approved` | World has been automatically approved through the Community Labs
`system_labs` | World has been submitted to Community Labs
`system_created_recently` | World was recently created
`system_updated_recently` | World has been recently updated and will show up in "Updated Recently" worlds row if also system approved