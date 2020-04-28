# 원격 구성

원격 구성에는 클라이언트가 올바르게 작동해야만하는 것들이 포함되어 있습니다.

현재 가장 중요한 것은 다른 모든 API에 사용되는`clientApiKey '입니다.

## 요청 방법
GET

## 엔드포인트
https://api.vrchat.cloud/api/1/config

## 인증이 필요한가?
필요없음

## 반환

Field | Type | Description
------|------|------------
messageOfTheDay | string | 알 수 없음 (미사용)
timeOutWorldId | string | 플레이어가 밴을 당한다면 이 세계로 가게됩니다.
gearDemoRoomId | string | 알 수 없음 (미사용)
releaseServerVersionStandalone | string | 서버 릴리즈 버전 (미사용)
downloadLinkWindows | string | 게임을 다운로드 할 위치
releaseAppVersionStandalone | string | 게임 릴리즈 버전
devAppVersionStandalone | string | 게임 개발자용 릴리즈 버전
devServerVersionStandalone | string | 개발을 위한 서버 버전
devDownloadLinkWindows | string | 개발자 다운로드 링크 (미사용)
currentTOSVersion | int | 현재 TOS 버전 (Terms Of Service)
releaseSdkUrl | string | 공식 유니티 SDK 패키지 버전
releaseSdkVersion | string | 공식 SDK 버전
devSdkUrl | string | 개발중인 유니티 SDK 패키지 링크
devSdkVersion | string | 개발용 SDK 버전
whiteListedAssetUrls | array | 에셋의 허용된 다운로드 위치
clientApiKey | string | client에 의해 사용되는 API키
viveWindowsUrl | string | VRChat이 Vive를 지원하기 전에이 기능을 사용하려면 먼저 다운로드해야합니다. Steam 상점 페이지로 리디렉션됩니다.
sdkUnityVersion | string | SDK가 지원하는 Unity 버전
hubWorldId | string | 허브 세계의 ID
homeWorldId | string | 기본 스폰 월드의 ID
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