# Unofficial VRChat API Docs

!> **Note!** This is an unofficial documentation, use at your own risk, these are not meant to be used by users, these are meant to be used internally for the game.

?> This docs are for SDK version `2017.10.26.17.36`

The VRChat team was nice enough to allow us reverse engineer the API, and create + publish these docs, but they have given us one condition, don't use it for malicious stuff!

This gives us the opportunity to create stuff that interact with the game in a way we could only imagine. 

The VRChat team has given us their trust, and we should use it well, and not lose it. So please use this for making the game better.

# Policy
```
Hello everyone. We have a new policy on reverse engineering our API & reverse engineering the APP and/or using hacked clients.

Regarding reverse engineering our API - Our stance here is don't be malicious.  This is unsupported and it might break.

Regarding reverse engineering our APP or using hacked clients - reverse engineering the VRChat app is a violation of section 9 of our TOS and can lead to a permanent ban from the service.
```
*- by VRPill 13/12/2017*

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

# Using the JavaScript library

!> **Note!** Whenever the script asks for an API it is because everything in the API is protected. The scripts you find here are ones that I checked and made sure the password never leaves the page, so be careful if you paste external scripts!

1. Go to [https://vrchat.net](https://vrchat.net) 
2. open developer tools (f12) 
3. open the console tab;
4. First paste the `library.js`
5. paste the script you want to run
6. ???
7. Profit

