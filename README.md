# サウナブログサイト

全国のサウナ施設や体験レポートを紹介する個人ブログサイトです。  
サウナー向けに、温度・水風呂・外気浴の情報をわかりやすくまとめています。

---

## 制作目的

- サウナ好きとして自分の体験を整理・発信する
- Next.js / React / TypeScript / Tailwind CSS を用いたモダン開発の実践
- 設計・実装・デプロイまでの一連の流れを経験する

---

## 使用技術

| 分類           | 使用技術                                        |
| -------------- | ----------------------------------------------- |
| フロントエンド | Next.js / TypeScript / React（App Router 構成） |
| スタイル       | Tailwind CSS                                    |
| デプロイ       | Vercel                                          |
| API            | microCMS                                        |

---

## 要求機能

### サイト全体

- レスポンシブ対応（スマホ優先）
- 表示崩れなし

### ページ／画面

- ヘッダー（ロゴ・メニュー）
- メインビジュアル
- 最新記事一覧（カード表示）
- 都道府県検索などの機能
- フッター

---

## ページ構成

| ページ         | パス             | 内容                                                                                                               |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| トップページ   | `/`              | ・サイトトップ<br>・最新記事一覧（新着順で6件） |
| 記事一覧ページ | `/articles`      | ・記事一覧ページ（カード表示)<br>・都道府県検索機能                                                                                        |
| 記事詳細ページ | `/articles/[id]` | ・各サウナ施設・体験レポートの詳細を表示                                                                             |

---

## ディレクトリ構成

```bash
src/
├─ app/
│  ├─ page.tsx                 
│  ├─ layout.tsx               
│  └─ articles/
│     ├─ page.tsx              
│     └─ [id]/
│        └─ page.tsx           
│
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx
│  │  ├─ Logo.tsx
│  │  ├─ Nav.tsx
│  │  ├─ Footer.tsx
│  │  ├─ MainLayout.tsx
│  │  └─ Container.tsx
│  │
│  ├─ ui/
│  │  ├─ Button.tsx
│  │  ├─ ReturnButton.tsx
│  │  ├─ Category.tsx
│  │  ├─ CategoryList.tsx
│  │  └─ SectionTitle.tsx
│  │
│  ├─ home/
│  │  └─ Hero.tsx
│  │
│  └─ articles/
│     ├─ ArticleList.tsx
│     ├─ ArticleDetail.tsx
│     └─ ArticleNavigation.tsx
│
└─ libs/
   └─ microcms.ts              
```

## ブランチ命名規則（最低限）

- **master**：本番ブランチ
- **develop**：開発統合ブランチ
- **feature/**：新機能追加

**ルール**

- 小文字＋ハイフン区切り
- ブランチ名は「種類/内容」で分かりやすく
