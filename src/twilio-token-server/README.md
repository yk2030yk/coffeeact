# twilio token server

トークン発行用の開発用サーバー

## node モジュールのインストール

```
$ npm install
```

## アカウント情報を記載する

```
$ cp .env.example .env
$ vi .env

ACCOUNT_SID=SETTING_ACCOUNT_SID
ACCOUNT_TOKEN=SETTING_ACCOUNT_TOKEN

```

## API KEY の作成

```
$ npm run createApiKey

API_KEY=YOUR_API_KEY
API_SECRET=YOUR_API_SECRET

```

## token 生成サーバーを起動する

```
$ npm run start
http://localhost:3003
```

## token を取得する

http://localhost:3003/twillio/publish_tokenにアクセスする
