---
title: Rust SDK
description: Rust is a fast and secure language with no runtime nor garbace-collector, whos memory-management makes memory bugs impossible.
sdk: rust
weight: 5
links:
- title: crates.io
  target: https://crates.io/crates/vrchatapi
---

```rust
// Step 1. We begin with creating a Configuration
// This contains the username and password for authentication.
let config = apis::configuration::Configuration::default();

// Step 2. VRChat consists of several API's
// e.g. (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
// Here we call the SystemAPI to fetch the number of users online.
let online = apis::system_api::get_current_online_users(&config).unwrap();

// Step 3. Print out the result!
println!("Current Online Users: {}", online);
```