---
title: Dart SDK
description: Dart is a client-side language allowing compilation for Android, iOS, web, and terminal.
sdk: dart
weight: 4
links:
- title: pub.dev
  target: https://pub.dev/packages/vrchat_dart
---

```dart
// Step 1. Create instance of VRChatAPI
final api = VrchatDart(userAgent: 'VRChat Dart Demo').api;

// Step 2. Log in with authentication
final loginResponse = await api.auth.login(
  username: 'username',
  password: 'password',
);

// Step 3. Print out current user's username
if (api.auth.currentUser != null) {
  print(api.auth.currentUser?.username);
}
```
