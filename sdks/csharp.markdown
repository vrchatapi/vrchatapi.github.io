---
layout: sdk
permalink: /sdk/csharp
title: C# SDK
sdk: csharp
---

```csharp
// Configure API key authorization: apiKeyCookie
Configuration.Default.Username = "username";
Configuration.Default.Password = "password";

try
{
    // Calling "GetConfig" will fetch the API key needed for further requests.
    SystemApi api = new SystemApi();
    var config = await api.GetConfigAsync();
    Console.WriteLine($"Received config {config.ClientApiKey}.");

    // Calling "GetCurrentUser" will log you in.
    AuthenticationApi authApi = new AuthenticationApi();
    var user = await authApi.GetCurrentUserAsync();
    Console.WriteLine($"Logged in user {user.DisplayName}");
}
catch (ApiException e)
{
    Debug.Print("Exception when calling API: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```