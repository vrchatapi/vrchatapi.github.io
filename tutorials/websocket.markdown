---
layout: tutorial
permalink: /tutorials/websocket
title: Websocket API
category: general
difficulty: hard
---

The Websocket API is

## Connecting

Connecting to the VRChat webhook server is done via the URL:
`wss://pipeline.vrchat.cloud/?authToken=authcookie_...`

The auth-token query parameter is the authorization cookie you receive when logging into VRChat.

## Message structure

Messages through VRChat's Websocket API are delivered as strings.
For example, the friend-offline event would be formated as:

```
"{content:\"{\"userId\": \"usr_...\"}\"}"
```

After parsing the message:

{% highlight javascript %}
{
    "content": "{\"userId\": \"usr_...\"}",
    "type": "friend-offline"
}
{% endhighlight %}

The value of content is **also** delivered as a string.
To get the full payload it is required to **again** parse the contents of `content`:

{% highlight javascript %}
{
    "content": {
        "userId": "usr_..."
    },
    "type": "friend-offline"
}
{% endhighlight %}

## Events

The known events

### Friend Online Event

{% highlight javascript %}
{
    "content": {
        "userId": "<userId>",
        "user": <userObject>
    },
    "type": "friend-online"
}
{% endhighlight %}

### Friend Offline Event

{% highlight javascript %}
{% endhighlight %}

### Friend Add Event

{% highlight javascript %}
{% endhighlight %}

### Friend Delete Event

{% highlight javascript %}
{% endhighlight %}

### Friend Update Event

{% highlight javascript %}
{% endhighlight %}

### Friend Location Event

{% highlight javascript %}
{% endhighlight %}

### Notification

{% highlight javascript %}
{% endhighlight %}
