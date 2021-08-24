---
layout: sdk
permalink: /sdk/java
title: Java SDK
sdk: java
---

```java
// Step 1. VRChat consists of several API's
// e.g. (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
// Here we instantiate the Authentication API which is required for logging in.
ApiClient defaultClient = Configuration.getDefaultApiClient();
AuthenticationApi authApi = new AuthenticationApi(defaultClient);

// Step 2. We begin with creating a Configuration
// This contains the username and password for authentication.
HttpBasicAuth authHeader = (HttpBasicAuth) defaultClient.getAuthentication("authHeader");
authHeader.setUsername("username");
authHeader.setPassword("password");

// Step 3. Call getCurrentUser on Authentication API.
// This logs you in if the user isn't already logged in.
CurrentUser result = authApi.getCurrentUser();
System.out.println(result.getDisplayName());
```