---
タイトル: はじめに
カテゴリ: 全般
難易度: かんたん
---

## ようこそ VRChat API へ！

VRChat APIは、プロフィール、フレンド、アバター、ワールドなどに関する情報を取得・更新するためとかに使えます。このAPIはREST思想に基づいて設計されているので、オブジェクトにアクセスしたり変更したりするために必要なURIを、予測可能かつ(やや)シンプルな形で提供できます。このページにある「はじめに」は、最短でVRChat APIを使い始めるための方法が記述されています。

## どこから始めればいいの？

まずは環境を整えましょう。必要なソフトをダウンロードして、APIの仕様書もダウンロードし、APIの中身を覗いてみましょう。
そしてかんたんなAPIリクエストを出して、レスポンスを取得できるか見てましょう。

「そんなのもう知ってるよ！もっと高度なことがしたい！」って方は[チュートリアル](/tutorials)から自分にあったページを見たり、このページの右にある "Next" を押すことによって次のチュートリアルへ行くことができます。

## 環境準備

### Insomniaをダウンロードしよう！

InsomniaはWindows、Linux、Macで動く高速なRESTクライアントです。
Insomniaは、初心者さんにもやさしいユーザーフレンドリーなインターフェースでAPIを探索するために使用することができます。
認証、Cookieの管理、環境変数とかも自動的に処理してくれます。

<a target="_blank" href="https://insomnia.rest/download" class="btn btn-purple fw-bold btn-lg">Download Insomnia</a>

ダウンロードしたEXE（もしくはお使いのOSに対応したバイナリ）をクリックするだけで、Insomniaが自動的にインストールされます。
インストールが完了すると、下の画像のようなウィンドウが表示されます。
右上の "歯車 "アイコンをクリックすると、テーマを変更することができます。
このチュートリアルでは、"Hyper" テーマを使用しますが、手順は同じです。

![Insomniaインストール画面](/assets/img/tutorials/getting-started/insomnia1.png)

### APIの仕様書をダウンロードしよう！

次はVRChatAPIのAPI仕様(specification)をダウンロードします。
これはコミュニティによって作られたOpenAPI形式のファイルで、一般人がアクセスできるすべてのパブリックエンドポイントとその使い方を定義しています。
まずはInsomniaを立ち上げましょう！

![](/assets/img/tutorials/getting-started/insomnia2.png)

右上のにある`Create`から`URL`をクリックし、出てきたポップアップボックスに以下のURLを入力し、`Fetch and Import`を押してください。

```
https://vrchatapi.github.io/specification/openapi.yaml
```

次に、`How would you like to import VRChat API Documentation?`的なことを聞かれるので、**Request Collection**を選択します。
べつにAPIのドキュメンテーションをデザインしたいわけじゃないからね。（初見ではわからないけど...）

![](/assets/img/tutorials/getting-started/insomnia3.png)

そして`Import Succeeded`みたいなことを言われたら成功です！`OK`を押して、ダッシュボードにポツンと置いてある "VRChat API Documentation" をクリックしましょう。

## はじめてのAPIリクエスト

それでははじめてのAPIリクエストを送信してみましょう！とっても簡単だけど同時にすごく大事な「システム構成の取得」をします。
システム構成にはアナウンスメント


では、最初のリクエストを送信してみましょう。とても簡単な、しかし必要なデモとして、システム構成を取得します。
システム構成には、アナウンス、ワールドリスト、最新のSDKへのダウンロードリンクなど、さまざまな情報が含まれています。
しかし、重要なのは、必要な `apiKey` も含まれており、システム構成を取得すると、このキーがクッキーとして設定されることです。
Now we are going to send our first request! As a very simple, but also necessary, demo we will fetch the System Config.
The System Config contains information such announcements, the world lists, download links to the latest SDKs, and much more!
But importantly it also contains the required `apiKey` and fetching the System Config sets this key as a cookie.

Now, under "**system**" folder on the left, locate the endpoint called "**Fetch API Config**" and simply press "**Send**".

![](/assets/img/tutorials/getting-started/insomnia4.png)

The API key is required for all further requests. The key is not personal, and has been the same for the last 8 years.
You can view the request response on the right, as well as the Headers that were returned and Cookies which were set.
Cookies are global, and you can view your cookie storage by clicking "Cookies" in the **top-left** corner of the window.

Next we are going to Authenticate, as being logged in is required for most requests.
Click the "**authentication**" folder on the left, locate the endpoint "**Login and/or Get Current User Info**".
In VRChat the same endpoint is used for authentication as getting your own user information.
If you are not logged in then it will generate an `authtoken` cookie for you and return your user info.
If you already are logged in then nothing will happen and it will only return your user info.

Click on the "**Basic**" tab, click *behind* the prefilled `httpUsername` and `httpPassword` and delete the variables.
Enter instead your own username and password and click "**Send**".

![](/assets/img/tutorials/getting-started/insomnia5.png)

If you do not have 2FA enabled (strongly recommend you do!) then you should see your own user information returned on the right side.
If you **do** have 2FA enabled (good job!) you need to locate the "**Verify 2FA code**" endpoint on the left, click on the "JSON" tab in the middle,
and then replace `string` with the real code from your 2FA generator app. If everything validated correctly you should see `verified: true` in the response.
You can now go back to the "Get Current User Info" endpoint and try get your own info again.

<div class="callout callout-warning mb-3">
  <strong>⚠️ Account Lockout Warning!</strong><br>
  If you got an error, please stop and contact help on Discord, as spamming the 2FA can get your account temporarily locked!
</div>

![](/assets/img/tutorials/getting-started/insomnia6.png)

**That's it! 🎉 Congratulations on getting started with the VRChat API!**

But you are not done! In fact, your journey starts now! You can now begin to start exploring the API and play around with what is possible.
Most of the endpoints are self-explanatory, and if you have any questions, you can always check in the [API Documentation](/docs/api) or contact on Discord.
Please keep the number of requests you send per minute to a minimum. If you send requests too quickly you will get rate limited.

Please also keep in mind that any actions you take is your own responsibility, and that deleted resources such as worlds or avatars cannot be recovered.
The writer of this tutorial accidentally deleted every single player moderation (mute, block, show avatar) they've made during the last 2 years. But that's a story for another time.
