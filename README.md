# welfare-ma-support

このリポジトリは、福祉事業者向けにマーケティングオートメーション支援を行う Web アプリケーションのサンプルです。バックエンドとフロントエンドのコードを同一リポジトリで管理しています。

## ディレクトリ構成

- `backend/` - Node.js を用いた API サーバー
- `frontend/` - React 製のフロントエンドアプリ
- `docs/` - 仕様書やワイヤーフレーム等のドキュメント
- `infrastructure/` - Docker 関連ファイル

## 起動手順

1. Node.js (推奨 v18 以降) をインストールします。
2. 各パッケージで依存関係をインストールします。
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. 必要に応じて `.env` など環境変数を設定します。
4. 開発サーバーを起動します。
   - バックエンド
     ```bash
     node index.js
     ```
   - フロントエンド
     ```bash
     npm start
     ```

> **注:** 実際の実装はまだ最小構成のため、起動スクリプトや設定ファイルは適宜追加してください。

## Backend 依存関係と開発手順

- 主要な依存ライブラリは `express`、`mongoose`、`dotenv` などを想定していますが、現状 `package.json` には登録されていません。必要に応じて追加してください。
- 新しい API を作成する場合は `backend/api` 以下にルート・コントローラー・サービスを配置します。
- テストフレームワークとして `jest` の利用を想定しています。`npm test` で実行できるようスクリプトを整備してください。

## Frontend 依存関係と開発手順

- `create-react-app` をベースにした構成です。スタイル関連では `styled-components` や `tailwindcss` の導入を検討できます。
- 画面コンポーネントは `frontend/components` に配置し、ページ単位のコンポーネントは `frontend/pages` に配置します。
- 開発中は `npm start` でローカルサーバーを立ち上げ、ホットリロードで確認できます。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
