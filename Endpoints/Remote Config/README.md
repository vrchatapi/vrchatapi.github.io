# Remote Config

Remote config contains configuration that the clients needs to work properly.

## Request Method 
GET

## Endpoint
https://api.vrchat.cloud/api/1/config

## Requires Authentication
No

## Usage
corrently the most important value from here is the `clientApiKey` as it is used for every other API 

## Example response
```json
{
   "messageOfTheDay":"",
   "timeOutWorldId":"wrld_5b89c79e-c340-4510-be1b-476e9fcdedcc",
   "gearDemoRoomId":"2282253502",
   "releaseServerVersionStandalone":"public_server_01",
   "downloadLinkWindows":"http://d8zlo8exwu24u.cloudfront.net/stable/VRChat_Oculus_0.11.7p6.exe",
   "releaseAppVersionStandalone":"0.12.0p2",
   "devAppVersionStandalone":"0.12.0p2",
   "devServerVersionStandalone":"dev_server_01",
   "devDownloadLinkWindows":"www.vrchat.net",
   "currentTOSVersion":5,
   "releaseSdkUrl":"https://d8zlo8exwu24u.cloudfront.net/sdk/VRCSDK-2017.10.26.17.36-Unity5.6.3p1.unitypackage",
   "releaseSdkVersion":"2017.10.26.17.36",
   "devSdkUrl":"https://d8zlo8exwu24u.cloudfront.net/sdk/VRCSDK-2017.08.29.13.08-Unity563p1.unitypackage",
   "devSdkVersion":"2017.10.26.17.36",
   "whiteListedAssetUrls":[
      "http://dbinj8iahsbec.cloudfront.net/plugins",
      "https://dev-api.vrchat.cloud/api/1/file/",
      "https://api.vrchat.cloud/api/1/file/"
   ],
   "clientApiKey":"JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26",
   "viveWindowsUrl":"http://store.steampowered.com/app/438100/",
   "sdkUnityVersion":"5.6.3p1",
   "hubWorldId":"wrld_eb7a5096-9c93-41db-a9d7-7b349a5d4815",
   "homeWorldId":"a57c0d11-46cc-4ce6-b6ac-d029a6569a37",
   "tutorialWorldId":"wld_7d3d25ec-663e-406e-96a3-e2c4fc0d8104",
   "appName":"VrChat",
   "serverName":"blue-api-1465",
   "deploymentGroup":"blue",
   "buildVersionTag":"build-11-12-17-frank-assemblecloud"
}
```