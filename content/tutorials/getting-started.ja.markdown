---
タイトル: はじめに
カテゴリ: 全般
難易度: かんたん
---

## ようこそ VRChat API へ！

VRChat APIは、プロフィール、フレンド、アバター、ワールドなどに関する情報を取得・更新するためとかに使えます。このAPIはREST思想に基づいて設計されているので、オブジェクトにアクセスしたり変更したりするために必要なURIを、予測可能かつ(やや)シンプルな形で提供できます。ここ「はじめに」ページでは、最短でVRChat APIを使い始めるための方法が記述されています。

## どこから始めればいいの？

まずは環境を整えましょう。必要なソフトをダウンロードして、APIの仕様書もダウンロードし、APIの中身を覗いてみましょう。
そしてかんたんなAPIリクエストを出して、レスポンスを取得できるか見てましょう。

「そんなのもう知ってるよ！もっと高度なことがしたい！」って方は[チュートリアル](/tutorials)から自分にあったページを見つけたり、このページの右にある **NEXT** を押すことによって次のチュートリアルへ行くことができます。

## 環境準備

### まずはInsomniaをダウンロードしよう！

InsomniaはWindows、Linux、Macで動く高速なRESTクライアントです。
Insomniaは、初心者さんにもやさしいユーザーフレンドリーなインターフェースでAPIを探索するために使用することができます。
認証、Cookieの管理、環境変数とかも自動的に処理してくれます。

<a target="_blank" href="https://insomnia.rest/download" class="btn btn-purple fw-bold btn-lg">Download Insomnia</a>

ダウンロードしたEXE（もしくはお使いのOSに対応したバイナリ）をクリックするだけで、Insomniaが自動的にインストールされます。
インストールが完了すると、下の画像のようなウィンドウが表示されます。
右上の "歯車 "アイコンをクリックすると、テーマを変更することができます。
このチュートリアルでは、"Hyper" テーマを使用しますが、手順は同じです。

![Insomniaインストール画面](/assets/img/tutorials/getting-started/insomnia1.png)

### そしてAPIの仕様書をダウンロードしよう！

次はVRChatAPIのAPI仕様(specification)をダウンロードします。
これはコミュニティによって作られたOpenAPI形式のファイルで、一般人がアクセスできるすべてのパブリックエンドポイントとその使い方を定義しています。

![URLから作成](/assets/img/tutorials/getting-started/insomnia2.png)

右上のにある`Create`から`URL`をクリックし、出てきたポップアップボックスに以下のURLを入力し、`Fetch and Import`を押してください。

```
https://vrchatapi.github.io/specification/openapi.yaml
```

次に、`How would you like to import VRChat API Documentation?`的なことを聞かれるので、**Request Collection**を選択します。
べつにAPIのドキュメンテーションをデザインしたいわけじゃないからね。（初見ではわからないけど...）

![コレクションを要求](/assets/img/tutorials/getting-started/insomnia3.png)

そして`Import Succeeded`みたいなことを言われたら成功です！`OK`を押して、ダッシュボードにポツンと置いてある "VRChat API Documentation" をクリックしましょう。

## はじめてのAPIリクエスト

ではでは、はじめてのAPIリクエストを送信してみましょう！とっても簡単だけど同時にすごく大事な「システム構成の取得」をします。
システム構成にはアナウンスメント、ワールドのリスト、最新のVRCSDKへのリンクなど、さまざまな情報が含まれています。そのシステム構成のなかでも最も重要なのが`apikey`です。 システム構成を取得するとこの`apikey`がクッキーとし設定されます。

さぁ、左の **system** フォルダーから **Fetch API Config** を探し出し、右上に出てくる **Send** を押してみましょう！

![APIをFetch](/assets/img/tutorials/getting-started/insomnia4.png)

このAPIキーは、以降すべてのリクエストに必要です。このAPIキーはいまさっき作られた個人的なものではありません（どころかここ8年ずーっと同じキーだったりします）。
画像右に表示されている`Preview`タブからリクエストのレスポンスを見たり、`Header`のタブからヘッダーを確認したり、`Cookie`のタブからついさっき設定されたクッキーを表示させることができます。
なお、クッキーとはグローバルなものなのです。いま使っている全てのクッキーの保存状態...「クッキーストレージ」を見るには、ウィンドウの**左上**にある`Cookie`をクリックします。そうするとクッキーの保存状態を確認することができます。

次に認証を行います。ほとんどのリクエストにはVRChatへのログインが必要なので、認証は大事です。
左側にある**authentication**フォルダをクリックし、**Login and/or Get Current User Info** というエンドポイントを見つけてください。
ところでVRChatでは、自分のユーザー情報を取得するのと同じエンドポイントが認証にも使用されます。
もしあなたがVRChatへログインしていなかった場合、このエンドポイントは`authtoken`クッキーを生成し、あなたのユーザー情報を返します。
すでにログインしている場合は特に何も起きず、あなたのユーザー情報のみが返されます。

それでは実践です；APIでログインしてみましょう！
**Basic**タブをクリックし、`httpUsername`と`httpPassword`の**すぐ隣**をクリックして、キーボードの`Backspace`や`Delete`キーなどでそれら変数を削除してください。
そして代わりに自分のユーザー名とパスワードを記入しちゃって、右上の**Send**を押しましょう。

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
