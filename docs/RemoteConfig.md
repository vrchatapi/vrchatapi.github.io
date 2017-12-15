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
downloadLinkWindows | string | unknown
releaseAppVersionStandalone | string | Game version of release
devAppVersionStandalone | string | Game version of dev
devServerVersionStandalone | string | dev server version
devDownloadLinkWindows | string | unknown
currentTOSVersion | int | Current TOS version that ues needs to accept
releaseSdkUrl | string | SDK Unitypackage for release
releaseSdkVersion | string | SDK Version for release
devSdkUrl | string | SDK Unitypackage for release
devSdkVersion | string | SDK Version for release
whiteListedAssetUrls | string | unknown
clientApiKey | string | The Key for using the API
viveWindowsUrl | string | unknown
sdkUnityVersion | string | Unity version of the SDK
hubWorldId | string | The ID of the hub world
homeWorldId | string | unknown
tutorialWorldId | string | tutorial world id
appName | string | App name (VrChat)
serverName | string | unknown
deploymentGroup | string | unknown
buildVersionTag | string | unknown
