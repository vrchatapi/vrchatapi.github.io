# Steam Details

The Steam Details are returned from the steam auth endpoint

For more details about the returned values, you can check the [Steam Web API Documentation](https://developer.valvesoftware.com/wiki/Steam_Web_API)

Field | Type | Description
------|------|------------
steamid | string | The user's SteamId
communityvisibilitystate | int | The steam community profile visibility
personaname | string | The user's display name
lastlogoff | string | The last time the user was online, in unix time
profileurl | string | The user's profile URL
avatar | string | The user profile avatar url (32x32)
avatarmedium | string | The user's profile avatar url (64x64)
avatarfull | string | The user's profile avatar url (184x184)
personastate | int | The user's current status
realname | string | The user's real name
primaryclanid | string | The user's primary group
timecreated | long | The time the user account was created
personastateflags | int | State flags (see below)
loccountrycode | string | The user's country reference digits

# PersonaStateFlags

Field | flag
------|-----
HasRichPresence|1
InJoinableGame|2
OnlineUsingWeb|256
OnlineUsingMobile|512
OnlineUsingBigPicture|1024
OnlineUsingVR|2048
