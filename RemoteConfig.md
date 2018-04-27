# Remote Config

Remote config contains configuration that the clients needs to work properly.

Corrently the most important value from here is the `clientApiKey` as it is used for every other API 

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/config

## Requires Authentication
No

## Returns

Field | Type | Description
------|------|------------
messageOfTheDay | string | Unknown
timeOutWorldId | string | The ID of the world you get kicked into for timeout
gearDemoRoomId | string | unknown
releaseServerVersionStandalone | string | release server version
downloadLinkWindows | string | Where you would originally download the game
releaseAppVersionStandalone | string | Game version of release
devAppVersionStandalone | string | Game version of dev
devServerVersionStandalone | string | dev server version
devDownloadLinkWindows | string | the developer download link (Useless)
currentTOSVersion | int | Current TOS version that ues needs to accept
releaseSdkUrl | string | SDK Unitypackage for release
releaseSdkVersion | string | SDK Version for release
devSdkUrl | string | SDK Unitypackage for release
devSdkVersion | string | SDK Version for release
whiteListedAssetUrls | array | unknown
clientApiKey | string | The Key for using the API
viveWindowsUrl | string | Before VRChat had support for vive you would have to download this in order for it too work
sdkUnityVersion | string | Unity version of the SDK
hubWorldId | string | The ID of the hub world
homeWorldId | string | Default Starting World
tutorialWorldId | string | The world for when you first install vrchat / does not matter if new user
disableEventStream | boolean | sends a bunch of anonymous data about your device / world / etc
disableAvatarGating | boolean | unknown
plugin | array | unknown
sdkNotAllowedToPublishMessage | string | when you aren't able to upload avatars or worlds on the sdk, this message appears (only on newer sdk)
sdkDeveloperFaqUrl | string | Their faq for the sdk 
sdkDiscordUrl | string | their official vrchat discord
registrationShitList | array | blacklists names so you can use them to register with
address | string | Probably VRChat's office address
contactEmail | string | VRChat team's contact email
supportEmail | string | VRChat team's support email
jobsEmail | string | VRChat team's job positions related email
copyrightEmail | string | VRChat team's copyright issues related email
moderationEmail | string | VRChat team's moderation related email
appName | string | App name (VrChat)
serverName | string | the current in use server API
deploymentGroup | string | unknown
buildVersionTag | string | current api version
apiKey | string | The API key, seems to be the same as clientApiKey