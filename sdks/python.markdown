---
layout: sdk
permalink: /sdk/python
title: Python SDK
sdk: python
---

```py
# Step 1. We begin with creating a Configuration
# This contains the username and password for authentication.
configuration = vrchatapi.Configuration(
    username = 'username',
    password = 'password',
)

# Step 2. VRChat consists of several API's
# e.g. (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
# Here we instantiate the Authentication API which is required for logging in.
with vrchatapi.ApiClient(configuration) as api_client:
    auth_api = authentication_api.AuthenticationApi(api_client)

    # Step 3. Call get_current_user on Authentication API.
    # This logs you in if the user isn't already logged in.
    current_user = auth_api.get_current_user()
    print("Logged in as:", current_user.display_name)
```