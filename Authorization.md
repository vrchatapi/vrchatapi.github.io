# Authorization

VRChat does authorization using the [`Authorization header`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization), using type of base64.

## What to pass

If you have the username "username", and password "password", your header should be `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

dXNlcm5hbWU6cGFzc3dvcmQ= is the base64 encoding of username:password. you can encode your credentials [`here`](https://www.base64encode.org/) if you are having trouble

## Other notes

Doing a request with credentials passed will return an authorization cookie. Any request subsequent request with credentials that do not have the cookie will also return a new authorization cookie.
Each cookie counts towards a "session" count (which is the amount of active authorization cookies you have).

You can run out of sessions, and when you do you will be unable to do more authorization required request without an authorization cookie.

You can expire authorization cookies either by not using them for < period of time > or by using the [`Logout endpoint`](https://vrchatapi.github.io/#/UserAPI/Logout)
