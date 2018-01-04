# Analytics API

VRChat has some simple analytics API.

These are based on events, the events are as following:

* startsVrChat
* leavesVrChat
* logout
* deviceInfo
* joinsWorld
* leavesWorld
* userActivity
* error

These may also contain the worldId, userId and position.

Everything goes into the eventstream endpoint

!> From the RemoteConfig, it seems that the eventstream is disabled (`disableEventstream=false`)

I am not gonna touch or mess with this API too much because I am not sure what impact it could have.