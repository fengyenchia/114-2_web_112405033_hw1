# Yen-Chia Portfolio

馮妍嘉（Yen-Chia）的個人作品集網站，展示網頁開發、互動設計、視覺設計、展覽與 3D 作品。網站採用 Next.js App Router 建置，內容由 Supabase PostgreSQL 管理，並以 Prisma 提供型別安全的資料存取。

[瀏覽正式網站](https://www.fengyenchia.com/)

![Yen-Chia Portfolio 預覽](./public/og-image.png)

## 特色

- 響應式作品集介面：桌面側欄與手機抽屜式導覽。
- 3D 影片預覽：支援鍵盤開啟、`Escape` 關閉、關閉按鈕焦點與原生影片控制列。
- 搜尋引擎最佳化：Metadata、Open Graph 圖片、`robots.txt` 與 sitemap。
- 效能處理：公開頁面採 ISR，每小時重新驗證；非首屏作品圖片採延遲載入。
- 使用者行為分析：透過 Google Analytics 記錄導覽與社群連結點擊。

## 技術棧

| 類別 | 技術 |
| --- | --- |
| 框架 | Next.js 16、React 19、TypeScript |
| 樣式 | Tailwind CSS 4 |
| 資料庫 | Supabase PostgreSQL |
| ORM | Prisma 6 |
| 動畫 | Motion、GSAP、React View Transition |
| 圖示 | Tabler Icons |
| 分析 | Google Analytics（`@next/third-parties`） |
| 套件管理 | pnpm |

## 網站路由

| 路由 | 說明 |
| --- | --- |
| `/` | 首頁與個人介紹入口 |
| `/about` | 個人簡介、學經歷與技能 |
| `/designProjects` | 視覺與互動設計作品 |
| `/programmingProjects` | 程式與網頁開發作品 |
| `/exhibitionWorks` | 展覽與動態視覺作品 |
| `/3dWorks` | 3D 影像、影片與列印模型 |

## 專案結構

```text
app/
├── _components/                 # 首頁專屬動畫元件
├── about/
│   └── _components/             # About 頁專屬元件
├── designProjects/
│   └── _components/             # Design Projects 卡片與列表
├── programmingProjects/
│   └── _components/             # Programming Projects 卡片與列表
├── exhibitionWorks/
│   └── _components/             # 展覽頁專屬動態元件
├── 3dWorks/
│   └── _components/             # 3D 影片預覽與列表
├── layout.tsx                   # 全域 layout、字體、Metadata、GA 與 ISR
├── sitemap.ts                   # Sitemap
└── robots.ts                    # Robots 規則

components/                      # 跨頁共用導覽、Footer、動畫與按鈕
lib/db.ts                        # Prisma Client 單例
prisma/
├── schema.prisma                # PostgreSQL schema
├── migrations/                  # 結構變更紀錄
└── seed.ts                      # 開發資料初始化
public/                          # 圖片、影片、Open Graph 圖片與本地字體
```

## 資料模型

主要內容以以下 Prisma model 管理：

- `Profile`：個人名稱、介紹、頭像與標語。
- `About_Content`、`About_Education`、`About_Experience`、`About_Skill`：About 頁內容。
- `DesignProjects`：設計作品、圖片、標籤與外部連結。
- `ProgrammingProjects`：程式作品、雙連結與可自訂按鈕文字。
- `ThreeDWorks`：3D 作品影片與顯示比例設定。

## 本機開發

### 需求

- Node.js 20 或更新版本
- pnpm
- 可連線的 Supabase PostgreSQL 專案

### 安裝

```bash
pnpm install
```

建立 `.env`，並設定以下變數：

```env
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_GA_ID=""
```

| 變數 | 用途 |
| --- | --- |
| `DATABASE_URL` | Prisma 執行時使用的 PostgreSQL 連線字串。 |
| `DIRECT_URL` | Prisma migration 使用的直接資料庫連線字串。 |
| `NEXT_PUBLIC_GA_ID` | 選填。Google Analytics Measurement ID；未設定時不載入分析元件。 |

啟動開發伺服器：

```bash
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## 常用指令

```bash
# 啟動本機開發
pnpm dev

# 建置 production bundle
pnpm build

# 啟動 production server
pnpm start

# 執行 ESLint
pnpm lint

# 重新產生 Prisma Client
pnpm prisma generate

# 寫入開發用 seed 資料
pnpm prisma db seed
```

## 資料庫變更

修改 `prisma/schema.prisma` 後，請先備份資料庫，再建立並檢查 migration。正式環境的 migration 應由部署流程或資料庫管理者執行；請勿在含正式內容的資料庫使用 `prisma migrate reset`。

```bash
pnpm prisma migrate dev --name <change_name>
pnpm prisma generate
```

## 部署

專案適合部署至 Vercel。部署前請在專案環境變數中設定：

- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_GA_ID`（選填）

部署後，請確認 Supabase 網路設定允許部署環境連線，並驗證 sitemap、Open Graph 圖片與 Google Analytics 是否正常載入。