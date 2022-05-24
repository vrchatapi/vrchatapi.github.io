---
title: Tags
category: general
difficulty: medium
---

Tags are a way to grant access, assign restrictions, or attach other kinds of metadata to various to objects e.g. worlds, users and avatars.
These tags are in the form of simple strings, grouped together in a string array, and commonly prefixed with a namespace designating the type of tag.

Tags starting with `admin_` are always assigned to the user manually by a staff. Tags starting with `system_` are automatically assigned by the system.

## User Tags

Tag | Description
----|------------
`admin_avatar_access` | User can upload Avatars without needing the neccesary trust rank
`admin_can_grant_licenses` | User can give out licenses to other users
`admin_canny_access` | User can access Canny without needing the neccesary trust rank
`admin_lock_tags` | User's tags have been locked and cannot be edited by the user
`admin_lock_level` | User's Trust rank has been locked and can no longer be changed automatically
`admin_moderator` | User is part of the VRChat Staff team
`admin_official_thumbnail` | Replaces the users profile picture with the VRChat logo
`admin_scripting_access` and `system_scripting_access` | User can upload user-made scripts (Deprecated)
`admin_world_access` | User can upload Worlds without needing the neccesary trust rank
`show_social_rank` | Toggle whether to show the user's real social rank<br>(Deprecated: This is now a registry key and sent over Photon)
`show_mod_tag` | Toggle whether to show the [Red](https://user-images.githubusercontent.com/5008081/153017830-bff84210-3868-4ea6-ba52-047932176a56.png) Staff nameplate
`system_avatar_access` | User can upload and publish Avatars
`system_early_adopter` | User bought VRC+ in the early period of it's launch, around December 2020
`system_feedback_access` | User can send Feedback
`system_probable_troll` | User has been reported multiple times and is (probably) a troll
`system_supporter` | User has an active VRC+ subscription
`system_legend` | User is an Experienced player and was active during the Summer of 2018<br>(Deprecated: Removed in 2022-05-05)
`system_troll` | User is a confirmed troll
`system_trust_basic` | User is "New User" (blue) Trust rank
`system_trust_known` | User is "User" (green) Trust rank
`system_trust_intermediate` | Unknown (Believed to be Deprecated)
`system_trust_trusted` | User is "Known User" (orange) Trust rank
`system_trust_advanced` | Unknown (Believed to be Deprecated)
`system_trust_veteran` | User is "Trusted User" (purple) Trust rank
`system_trust_legend` | User is "Veteran User" (previously gold) Trust rank<br>(Deprecated: Removed in 2022-05-05)
`system_world_access` | User can upload and publish Worlds

Trust rank tags have an offset of 1 with their name, so `system_trust_trusted` is actually only `Known User` (orange). The arrows in the following picture highlight the offset naming inaccuracy. The naming system is because of legacy reasons. Visistors have no trust rank at all. It is common for people User and above to be missing the tag for New User.

![Trust ranks](https://i.imgur.com/dBoxDVG.png)

## World Tags

Tag | Description
----|------------
`author_tag_*` | Custom tag added by the world author, with the last word being anything; used during searching by tag
`author_tag_avatar` | World will show up in "Avatar Worlds" row
`author_tag_game` | World will show up in the "Games" world row
`admin_featured` | World has been manually selected by staff to appear in the "Featured" world category
`admin_approved` | World has been manually approved by staff
`admin_avatar_world` | World was manually been selected by staff as avatar world (Deprecated)
`admin_community_spotlight` | World has been manually selected by staff to appear in "Spotlight" row
`admin_hidden` | World will always be hidden from search
`admin_hide_active` | World will be hidden from "Active" row
`admin_hide_new` | World will be hidden from "Recently Updated Worlds" row when updated
`admin_hide_popular` | World will be hidden from "Popular Worlds" row
`debug_allowed` | World [Debugging](https://user-images.githubusercontent.com/5008081/136931542-84fe3806-6933-4a0f-b816-d3a8052298a8.png) has been enabled by author, allowing to see state of triggers
`system_approved` | World has been automatically approved through the Community Labs
`system_created_recently` | World was recently created
`system_labs` | World has been submitted to Community Labs
`system_updated_recently` | World has been recently updated and will show up in "Updated Recently" worlds row if also system approved
`content_sex` | World has been uploaded with "Nudity/Sexuality" warning.
`content_violence` | World has been uploaded with "Realistic Violence" warning.
`content_gore` | World has been uploaded with "Blood/Gore" warning.
`content_other` | World has been uploaded with "Other NSFW" warning.

Worlds can also have a range of different event-specific tags such as `admin_vket2021` for the Vket row, `admin_muzzfesst` for the MUZZFEST event, or `admin_halloween_2019` for the 2019 Halloween row. These are not listed because it would be impossible to accurately keep such list up-to-date, and each tag is of little use outside of that specific event.

## Language Tags

Language tags primarily appear on User profiles, with each user being allowed to have at most 3 language tags. Language tags can also appear on Instances, showing the languages the people in that instance speak.

Tag | Description
----|------------
`language_eng` | English / English
`language_kor` | 한국어 / Korean
`language_rus` | Русский / Russian
`language_spa` | Español / Spanish
`language_por` | Português / Portuguese
`language_zho` | 中文 / Chinese
`language_deu` | Deutsch / German
`language_jpn` | 日本語 / Japanese
`language_fra` | Français / French
`language_swe` | Svenska / Swedish
`language_nld` | Nederlands / Dutch
`language_pol` | Polski / Polish
`language_dan` | Dansk / Danish
`language_nor` | Norsk / Norwegian
`language_ita` | Italiano / Italian
`language_tha` | ภาษาไทย / Thai
`language_fin` | Suomi / Finnish
`language_hun` | Magyar / Hungarian
`language_ces` | Čeština / Czech
`language_tur` | Türkçe / Turkish
`language_ara` | العربية / Arabic
`language_ron` | Română / Romanian
`language_vie` | Tiếng Việt / Vietnamese
`language_ase` | American Sign Language
`language_bfi` | British Sign Language
`language_dse` | Dutch Sign Language
`language_fsl` | French Sign Language
`language_kvk` | Korean Sign Language

## Useless tags

Tag | Description
----|------------
`system_neuralink_beta` | Meaningless tag used by Tupper
`system_extremely_cool_guy` | Meaningless tag used by Tupper
`system_stop_being_nosy` | Meaningless tag used by Tupper
`system_notamod` | Meaningless tag used by Tupper
`system_no_seriously_im_not_a_mod_how_many_times_do_i_have_to_tell_people` | Meaningless tag used by Tupper
`system_the_tag_is_just_named_that` | Meaningless tag used by Tupper
`system_haha_you_have_to_document_this_one_too` | Meaningless tag used by Tupper
`system_legen_wait_for_it_dary` | Meaningless tag used by Tupper
`system_UE5_dev_access` | Meaningless tag used by Tupper
`Never gonna give you up` | Meaningless tag used by Fusl
`system_not_cute` | Meaningless tag used by Fusl
`'; DROP DATABASE tags; -- ` | Meaningless tag used by Fusl
`'; DROP TABLE tags; -- ` | Meaningless tag used by Fusl
`¯\\_(ツ)_/¯` | Meaningless tag used by Fusl
`ඞ` | Meaningless tag used by Fusl
`we've been trying to reach you about your car's extended warranty` | Meaningless tag used by Fusl
`system_smart_fridge_beta` | Meaningless tag used by Nyx
`system_trust_sussy` | Meaningless tag used by Squid
