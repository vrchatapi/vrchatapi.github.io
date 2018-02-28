# VRChat API Documentation

!> **Super Important!** Using this API is allowed for non malicious usage. Just don't abuse the API and they won't restrict it.

?> These docs are for SDK version `2018.02.23.18.45`.

# Documentation Information
Sections of the documentation which are labeled **Outdated** means the the article or endpoint is no longer supported be the current API version or we are still working on making sure the endpoint is still working.

Sections which are labeled **Removed** are old and now unused articles which are only kept for reference to old information.

Sections labeled **Soon** are work in progress articles and will be added to the documentation on future updates.

# Links to APIs

Right now there are 3 different options

1. Dev API - https://dev-api.vrchat.cloud/api/1/ (Not Documented)
2. Beta API - https://beta-api.vrchat.cloud/api/1/ (Not Documented)
3. Release API - https://api.vrchat.cloud/api/1/

In the docs we just use the Release but you can manually change it if needed

# Quick overview

VRChat uses the HTTP procotol to get basic information from the server and send information to the server.

## Authentication

Most of the APIs require you to be authenticated.

There are two ways to authenticate

1. Send the  Authorization header with Basic authentication
2. After calling the login send a cookie named `auth` with your `authToken`

The second option is probably more recommended

## Client API Key

Every API requires you to give a special API key. To get it simply call the [Remote Config](RemoteConfig.md) endpoint

?> Last Known key is `JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26`
