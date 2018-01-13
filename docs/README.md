# Unofficial VRChat API Docs

!> **Super Important!** I am not going to update this repo anymore as the rules and policy about RE the SDK/API is now prohibited!

?> These docs are for SDK version `2017.12.12.13.36`

The new EULA does not allow anymore to RE the SDK/API and use it in any way other than to create avatars/worlds/items.

From the [EULA](https://vrchat.com/legal):

```
5. VRChat SDK License. Subject to your complete and ongoing compliance with the terms and conditions in this EULA and any additional terms included with the SDK, VRChat grants you a limited, personal, worldwide, royalty-free, non-exclusive, nonsublicenseable, and nontransferable license to: (a) use a reasonable number of copies of any documentation provided as part of the SDK (“Documentation”) solely in connection with your development of avatars, virtual worlds, and other virtual items for use solely within the Service (“Virtual Content”); (b) reproduce, modify, and use any sample software provided to you in source code format as part of the SDK in either object code or source code formats solely in connection with your development and use of Virtual Content within the Service; and (c) reproduce and distribute any sample software provided to you in object code format as part of the SDK, including any plugins (“SDK Object Code”) in object code format solely in connection with your development and use of Virtual Content within the Service. You will not: (i) transfer, disclose, or distribute any portion of the SDK or Documentation or access to either to any third party, except as permitted by the license grant above; (ii) subject any portion of the SDK or Documentation to the terms of any “open source” or “creative commons” license; (iii) modify any of the SDK Object Code included with the SDK; or (iv) use the SDK or Documentation to develop code, software, or other materials for anything other than for use with the Service.
```

```
9. Prohibited Conduct. BY USING THE SERVICE YOU AGREE NOT TO:
[...]
interfere with security-related features of the Service, including by: (a) disabling or circumventing features that prevent or limit use or copying of any content; or (b) reverse engineering or otherwise attempting to discover the source code of any portion of the Service, including the SDK Object Code, except to the extent that the activity is expressly permitted by applicable law;
``` 

this basically means "DO NOT TOUCH IT"

# Links to APIs

Right now there are 3 different options

1. Dev API - https://dev-api.vrchat.cloud/api/1/
2. Beta API - https://beta-api.vrchat.cloud/api/1/
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

Every API requires you to give a special API key. To get it simply call the Remote Config endpoint (read here <INSERT LINK>)

?> Last Known key is `JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26`
