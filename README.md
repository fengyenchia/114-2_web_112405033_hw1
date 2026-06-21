# 馮妍嘉 個人作品集網頁 (Yen-Chia's Portfolio)

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-flat&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-flat&logo=react)
![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=flat-flat&logo=pnpm)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=flat-flat&logo=prisma)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-flat&logo=supabase)


## 專案概述

此專案為馮妍嘉的個人作品集網站，展示網頁開發、互動設計、視覺設計、3D 建模等領域的技能與創作成果。網站採用 Next.js 的 App Router 與 Server Components 技術，結合 Tailwind CSS，製作出一個響應式網頁。後端則使用 Supabase 提供的 PostgreSQL 資料庫，並透過 Prisma Client 進行資料管理與操作。

**正式作品集網站**：[https://114-2-web-112405033-hw1.vercel.app/](https://114-2-web-112405033-hw1.vercel.app/)

## 技術棧與架構

### 前端開發 (Front-end)
* **核心框架**：Next.js 16 & React 19
* **視覺樣式**：Tailwind CSS 4.0
* **動態特效**：Framer Motion
* **圖示支援**：React Icons

### 後端與資料庫 (Back-end & Database)
* **資料庫環境**：Supabase (PostgreSQL)
* **ORM 工具**：Prisma Client 6.19 (支援 Transaction Pooler 與 Session 直連分流)
* **資料初始化**：採用 `tsx prisma/seed.ts` 腳本，一鍵注入所有資料。

### 開發工具 (Tools)
* **套件管理**：pnpm
* **環境控管**：TypeScript 5.9 + ESLint 9

---

## 📂 專案核心目錄結構

```text
├── app/                  # Next.js App Router 頁面路由與全域配置
│   ├── 3dWorks/          # 3D 建模與動態作品頁
│   ├── about/            # 關於我 (學經歷、技術圖表)
│   ├── designProject/    # 互動與視覺設計專案頁
│   ├── exhibitionWorks/  # 展覽主視覺與相關作品頁
│   ├── programmingProject/ # 程式開發與新媒體專案頁
│   ├── globals.css       # 全域樣式設定 (Tailwind 核心配置)
│   ├── layout.tsx        # 全域 Layout 與 Metadata SEO 設定
│   └── page.tsx          # 網站主頁入口
├── components/           # 模組化可複用 UI 元件庫
│   ├── designCard.tsx    # 設計專案卡片
│   ├── fadeIn.tsx        # 自訂動畫轉場元件 (Framer Motion)
│   ├── homeButton.tsx    # 回首頁按鈕
│   ├── LogoLoop.tsx      # 社群媒體與品牌標誌跑馬燈 (含 .css, .d.ts)
│   ├── Menu.tsx          # 導覽選單元件 (含 MobileMenu, MobileFooter)
│   ├── programmingCard.tsx # 程式專案卡片
│   ├── ScrollVelocity.tsx # 動態滾動速度字體特效 (含 .css)
│   ├── skillCard.tsx     # 技能分類卡片
│   ├── TextType.tsx      # 打字機視覺效果元件 (含 .css)
│   ├── TrueFocus.jsx     # 文字聚焦特效元件 (含 .css)
│   └── video.tsx         # 影片播放與燈箱彈窗模組
├── lib/                  # 全域共用工具函式與配置 (如 Prisma 實例)
├── prisma/               # Database Schema 與 資料庫控制中心
│   ├── migrations/       # 資料庫結構變更紀錄歷史
│   ├── schema.prisma     # 資料庫結構定義藍藍圖 (PostgreSQL)
│   └── seed.ts           # 資料庫初始化自動化腳本 (一鍵注入資料)
├── public/               # 靜態資源存放庫 (影片、作品渲染圖、音訊)
├── .env                  # 環境變數配置文件 (資料庫雙通道連線字串)
├── package.json          # 專案腳本與套件相依性清單
├── pnpm-lock.yaml        # pnpm 鎖定檔 (確保團隊安裝版本一致)
└── postcss.config.mjs    # PostCSS 轉換工具配置文件 (支援 Tailwind CSS 運作)
