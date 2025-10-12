# サウナブログサイト

全国のサウナ施設や体験レポートを紹介する個人ブログサイトです。  
サウナー向けに、温度・水風呂・外気浴の情報をわかりやすくまとめています。

---

## 🎯 制作目的

- サウナ好きとして自分の体験を整理・発信する
- Next.js / React / TypeScript / Tailwind CSS を用いたモダン開発の実践
- 設計・実装・デプロイまでの一連の流れを経験する

---

## 🧱 使用技術

| 分類           | 使用技術                                        |
| -------------- | ----------------------------------------------- |
| フロントエンド | Next.js / TypeScript / React（App Router 構成） |
| スタイル       | Tailwind CSS                                    |
| デプロイ       | Vercel                                          |
| API            | microCMS                                        |

---

## ⚙️ 要求機能

### サイト全体

- レスポンシブ対応（スマホ優先）
- 表示崩れなし

### ページ／画面

- ヘッダー（ロゴ・メニュー）
- メインビジュアル（キャッチコピー or 最新レポート）
- 最新記事一覧（カード表示）
- 都道府県検索などの機能
- フッター（著作権・SNS リンク）

---

## 🗂 ページ構成

| ページ         | パス             | 内容                                                                                                               |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| トップページ   | `/`              | ・サイトトップ<br>・最新記事一覧（新着順）<br>・都道府県検索など機能<br>・プロフィール<br>・コンタクト（必要なら） |
| 記事一覧ページ | `/articles`      | 記事一覧ページ（カード表示）                                                                                       |
| 記事詳細ページ | `/articles/[id]` | 各サウナ施設・体験レポートの詳細を表示                                                                             |

---

## 📁 ディレクトリ構成

参考: [Zenn 記事（yamu_official）](https://zenn.dev/yamu_official/articles/70f59488e8415d)

```bash
src/
├─ app/
│  ├─ page.tsx                 # トップページ（最新記事・都道府県検索など）
│  ├─ articles/
│  │  ├─ page.tsx              # 記事一覧ページ
│  │  └─ [id]/page.tsx         # 記事詳細ページ
│
├─ components/
│  ├─ layout/                  # レイアウト関連コンポーネント
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  └─ MainLayout.tsx
│  ├─ ui/                      # 汎用UIパーツ
│  │  ├─ Button.tsx
│  │  ├─ Tag.tsx
│  │  ├─ Card.tsx
│  │  └─ SectionTitle.tsx
│  ├─ home/                    # トップページ専用コンポーネント
│  │  ├─ Hero.tsx
│  │  ├─ LatestArticles.tsx
│  │  ├─ PrefectureFilter.tsx
│  │  └─ PickupSauna.tsx
│  └─ articles/                # 記事関連コンポーネント
│     ├─ ArticleList.tsx
│     ├─ ArticleDetail.tsx
│     └─ RelatedArticles.tsx
│
└─ lib/
   └─ microcms.ts              # API呼び出し・データ取得処理
```

## 🏷 ブランチ命名規則（最低限）

- **master**：本番ブランチ
- **develop**：開発統合ブランチ
- **feature/**：新機能追加（例：`feature/add-latest-articles`）
- **fix/**：バグ修正（例：`fix/footer-layout`）
- **hotfix/**：本番緊急修正（例：`hotfix/api-fetch-error`）

**ルール**

- 小文字＋ハイフン区切り
- ブランチ名は「種類/内容」で分かりやすく
