---
layout: sdk
permalink: /sdk/dart
title: Dart SDK
sdk: dart
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
