# Remote Config

Remote config contains configuration that the clients needs to work properly.

Currently the most important value here is the `clientApiKey` as it is used for every other API

## Request Method
GET

## Endpoint
https://api.vrchat.cloud/api/1/config

## Requires Authentication
No

## Returns

Field | Type | Description
------|------|------------
messageOfTheDay | string | Unknown (unused)
timeOutWorldId | string | The client goes to this world if banned from public instances
gearDemoRoomId | string | Unknown (unused)
releaseServerVersionStandalone | string | Release server version (unused)
downloadLinkWindows | string | Where you would originally download the game
releaseAppVersionStandalone | string | Release game build
devAppVersionStandalone | string | Development game build
devServerVersionStandalone | string | Server version for development build
devDownloadLinkWindows | string | the developer download link (Unused)
currentTOSVersion | int | Current TOS version
releaseSdkUrl | string | Public SDK unitypackage link
releaseSdkVersion | string | Public SDK version
devSdkUrl | string | Development SDK unitypackage link
devSdkVersion | string | Development SDK version
whiteListedAssetUrls | array | Whitelisted download locations for assets
clientApiKey | string | API key used by the client
viveWindowsUrl | string | Before VRChat had support for vive you would have to download this in order for it to work, now redirects to the game's Steam store page
sdkUnityVersion | string | Unity version supported by the SDK
hubWorldId | string | ID of the hub world
homeWorldId | string | ID of the default spawn in world
tutorialWorldId | string | ID of the world used for introduction to the game
disableEventStream | boolean | If true, the client won't send analytics about your current world (not used in client)
disableAvatarGating | boolean | If true, anyone can upload avatars, otherwise, only those with specific tags can (new user and higher)
disableFeedbackGating | boolean | If true, anyone can give feedback, otherwise only users with specific tags can
disableRegistration | bool | If true, registration is disabled
plugin | string | Extra plugins to run on the server, comma-separated strings
sdkNotAllowedToPublishMessage | string | Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
sdkDeveloperFaqUrl | string | Link to the developer FAQ
sdkDiscordUrl | string | Link to the official VRChat Discord
notAllowedToSelectAvatarInPrivateWorldMessage | string | Used in game to notify a user they aren't allowed to select avatars in private worlds
userVerificationTimeout | int | timeout for verification (TODO: what kind of verification), assumed in seconds
userUpdatePeriod | int | timeout between updating, assuming seconds
userVerificationDelay | int | delay between verifications, assuming seconds
userVerificationRetry | int | Delay before the next verification retry
worldUpdatePeriod | int | unknown
moderationQueryPeriod | int | unknown
defaultAvatar | string | Default avatar ID
dynamicWorldRows | array of `DynamicWorldRows` | Extra rows to display in the client's 'world' listing
address | string | VRChat's office address
contactEmail | string | VRChat's contact email
supportEmail | string | VRChat's support email
jobsEmail | string | VRChat's job application email
copyrightEmail | string | VRChat's copyright issues related email
moderationEmail | string | VRChat's moderation related email
disableEmail | bool | unknown
appName | string | Game name (VrChat)
serverName | string | Currently used photon server plugin version
deploymentGroup | string | Currently used photon server plugin codename
buildVersionTag | string | Build tag for the server plugin
apiKey | string | API key used by the website

### DynamicWorldRows

Field | Type | Description
------|------|------------
name | string | displayed text in the client
tag | string | any worlds having this tag will appear in the row
index | int | where in the client the row will appear
