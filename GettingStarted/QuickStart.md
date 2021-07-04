# Quick Start

!> **Super Important!** Usege of the API is **NOT** allowed for malicious purposes. Abuse of the API may result in account termination! Please read the [Disclaimer](/README?id=disclaimer) before getting started!

The VRChat API (application programming interface) can be used to programatically retrive or update information regarding your profile, friends, avatars and worlds. The API consists of two parts, "Photon" which is only used in-game, and the "Web API" which is used by both the game and the website, and which is the focus of this documentation.

The Web API operates over the HTTP protocol and transmits data in JSON format. It is what is called [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), meaning it is stateless, requiring no information of the current state or the request sent previously, and the type of operation is determined by the HTTP method. Almost all API calls also require you to be be authenticated and to abide by the rate-limit.

## Documentation notes

?> These docs are for Unity SDK version `2018.4.20f1` and build tag `master-build-2021-03-26`.

Sections of the documentation labeled **Outdated** means the article or endpoint is no longer supported or that the documentation is out-of-date. Sections labeled **Soon** are work in progress articles, while sections labeled **Beta** are endpoints found in the beta client, and are not yet released into production.

## API Libraries

There are various pre-written libraries which can be used to interact with the API. Depending on the programming languages these libraries are mantained to varying degree, and while most have basic functionality they can lack more unusual endpoitns or not be updated in terms of recent changes to the API.

1. VRCpy (Python) https://github.com/VRChatAPI/VRChatPython

2. ~~VRChat.Net (C#) https://github.com/VRChatAPI/VRChat.Net~~ (outdated)

3. ~~VRChatJava (Java) https://github.com/VRChatAPI/VRChatJava~~ (outdated)

Out of these the Python library is the one most updated, and therefore the most recommended. For other languages it is possible to use a generic HTTP client, such as [Axios](https://github.com/axios/axios) for NodeJS or the new [HttpClient](https://dzone.com/articles/java-11-standardized-http-client-api) in Java 11. There are also graphical API clients such as [Postman](https://www.postman.com/downloads/) and [Insomnia](https://insomnia.rest/download).

This documentation will show examples using curl, a command-line client allowing you to test various endpoints directly without writing a program. Curl can be [downloadable for Windows](https://curl.se/windows/) and installed with `sudo apt-get install curl` on Linux or `brew install curl` on MacOS.

```bash
$ curl https://api.vrchat.cloud/api/1/health
{
  "ok": true,
  "serverName": "prod-api-blue-power-0by",
  "buildVersionTag": "master-build-2021-04-22-ben-bearcrayon"
}
```

## Client API Key

Every API requires you to give a special API key. To get it simply call the [Remote Config](/SystemAPI/Config.md) endpoint. The API key can be passed in either a query parameter named `apiKey` or by setting a cookie with the name.

?> The last known key is `JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26`

```bash
$ curl https://api.vrchat.cloud/api/1/users
{"error":{"message":"\"No API Key provided!\"","status_code":401}}
# FAIL: Missing apiKey, as this is a GET request we will provide it as a URL parameter.

$ curl https://api.vrchat.cloud/api/1/users?apiKey=JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26
{"error":{"message":"\"Missing Credentials\"","status_code":401}}
# SUCCESS: We will now proced to authenticating.
```

## Authorization

!> **Session Limit**: Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the authcookie whenever you can, and avoid sending the Authorization header unless strictly neccesary.

Most of the APIs require you to be authenticated, and VRChat does authorization using the [`Authorization header`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). The username and password are encoded using base64, and then sent to the API endpoint `/api/1/auth/user`.

After authenticating against the API it is **critical** to save and reuse the returned `auth` cookie. Each authentication with login credentials counts as a separate "session", out of which you have a limited amount. Authorization tokens expire either by not using them for a certain period of time, or by using the [`Logout endpoint`](/UserAPI/Logout.md).

```bash
# Windows (using Powershell)
$ [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes('username:password'))
dXNlcm5hbWU6cGFzc3dvcmQ=

# Linux / MacOS
$ echo -n "username:password" | base64
dXNlcm5hbWU6cGFzc3dvcmQ=

# Request an authcookie
# The 'auth' cookie is saved to "cookiejar.txt", this makes it easier to re-use in future commands.
# Replace the base64-encoded string "Rm9vcmFjazptYXhmYXgyNTI1ISE" with the one generated in one of the previous commands.
# Also replace "My User Agent" with a custom and unique agent name to identify yourself!
$ curl -c cookiejar.txt -A "My User Agent" -H "Authorization: Basic Rm9vcmFjazptYXhmYXgyNTI1ISE=" https://api.vrchat.cloud/api/1/auth/user
```

For this we will first encode the username and password as base64. We will then authenticate against the API and save the resulting `apiKey` and `auth` cookies to `cookiejar.txt`. We will be using this file in future commands when interacting with the API. In case the auth token expires, simply delete the file and run the command again.
