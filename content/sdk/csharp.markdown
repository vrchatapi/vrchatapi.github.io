---
title: C# SDK
description: C# is a high-level, class-based OOP langauge, part of .NET, and builds for desktop and Unity.
sdk: csharp
weight: 6
---

```csharp
// Configure API key authorization: apiKeyCookie
Configuration.Default.Username = "username";
Configuration.Default.Password = "password";

try
{
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