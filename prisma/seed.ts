// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.profile.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.about_Content.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.about_Education.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.about_Experience.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.about_Skill.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.designProjects.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.programmingProjects.deleteMany(); // 清除舊資料，確保種子資料乾淨
  await prisma.threeDWorks.deleteMany(); // 清除舊資料，確保種子資料乾淨

  await prisma.profile.createMany({
    data: [
      {
        name: "馮 妍 嘉",
        description: "NCCU AD x DCT",
        imgSrc: "/avatar.png",
        motto: "對我來說,將設計與程式結合，做出有趣的互動作品,是一件很好玩的事"
      },
    ],
  });
  
  await prisma.about_Content.createMany({
    data: [
      {
        description: "我是個熱衷於嘗試新事物且喜歡挑戰的人，對我來說，設計的靈感來自生活，我時常將設計與科技結合，透過程式、互動技術或是其他數位工具，讓創意與美的展現有更多可能。我也擅長以簡潔的線條、擬人的物件，搭配可愛的色彩來呈現作品，藉此傳達出活潑卻也讓人眼前一亮的感覺。",
      },
    ],
  });
  
  await prisma.about_Education.createMany({
    data: [
      {
        school: "國立政治大學",
        department: "廣告學系",
        year: "2023 - Now",
      },
      {
        school: "國立政治大學",
        department: "數位內容與科技學士學位學程",
        year: "2024 - Now",
      },
    ],
  });
  
  await prisma.about_Experience.createMany({
    data: [
      {
        role: "抓馬戲劇社 美宣",
        description: "",
        year: "2025/02 - Now",
      },
      {
        role: "區塊鏈應用課程 展覽主視覺",
        description: "",
        year: "2025/09 - 2025/12",
      },
      {
        role: "傳播學院數位平台年度大展 展覽組長",
        description: "",
        year: "2025/09 - 2025/12",
      },
      {
        role: "傳播學院數位平台 教學組長",
        description: "",
        year: "2025/02 - 2025/12",
      },
      {
        role: "包種茶節 視覺設計組",
        description: "",
        year: "2023/09 - 2023/12",
      },
    ],
  });

  await prisma.about_Skill.createMany({
    data: [
      {
        category: "Design & Creative",
        tags: ["Illustrator", "Photoshop", "Lightroom", "Figma", "Blender"],
      },
      {
        category: "Coding & Interaction",
        tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Next.js", "p5.js", "Python", "C++", "C#"],
      },
    ],
  });

  await prisma.designProjects.createMany({
    data: [
        {
        "imgSrc": "/design/character.png",
        "title": "角色設計",
        "description": "創意與設計",
        "tags": ["手工書", "Illustrator"],
        "url": "https://fengyenchia.github.io/my-page/arts/character/character.html"
        },
        {
        "imgSrc": "/design/gatherTown.png",
          "title": "遊戲化專題",
          "description": "美學概論",
          "tags": ["八角理論", "化學"],
          "url": "https://www.notion.so/21416d8cb3a8807aa89ac427c4bb30f7"
        },
        {
          "imgSrc": "/design/comic.png",
          "title": "漫畫",
          "description": "圖像與文創",
          "tags": ["Illustrator"],
          "url": "https://fengyenchia.github.io/my-page/arts/comic/comic.html"
        },
        {
          "imgSrc": "/design/poster.png",
          "title": "海報設計",
          "description": "接案",
          "tags": ["Photoshop", "Illustrator"],
          "url": "https://fengyenchia.github.io/my-page/arts/post/post.html"
        },
        {
          "imgSrc": "/design/arena.png",
          "title": "Resume Arena 作品",
          "description": "個人創作",
          "tags": ["VJ"],
          "url": "https://fengyenchia.github.io/my-page/arts/resolume_arena_work/resolume_arena.html"
        },
        {
          "imgSrc": "/design/figma.png",
          "title": "Figma 作品",
          "description": "個人線上名片",
          "tags": ["Resume"],
          "url": "https://www.figma.com/proto/MJ8HnHLQ8dUah2NoTTYiv5?node-id=1-2"
        },
        {
          "imgSrc": "/design/ar.png",
          "title": "AR 遊戲專題",
          "description": "創意與設計 - 小組專題 金獎",
          "tags": ["AR", "Illustrator"],
          "url": "https://drive.google.com/file/d/1BMg7HhCWwqQwmG8YZTqHS4bn-g0yXduX/view?usp=sharing"
        },
        {
          "imgSrc": "/design/figma_2.png",
          "title": "Figma 作品",
          "description": "解謎遊戲 - 完美人設的代價",
          "tags": ["社群媒體焦慮"],
          "url": "https://www.figma.com/proto/bdzyi2jP0SbqMH5EG1bjW8/%E5%B0%88%E9%A1%8C?node-id=434-2320&p=f&viewport=2486%2C385%2C0.31&t=eBxwKEDJ3WgyVrOh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=434%3A2320&page-id=4%3A7",
        }
    ],
  });
  
  await prisma.programmingProjects.createMany({
    data: [
        {
          "imgSrc": "/programming/website.png",
          "title": "personal website",
          "year": "2026",
          "description": "用 Next.js 框架開發的個人網站，並搭配 React, Tailwind CSS 來製作。",
          "website1_url": "https://114-2-web-112405033-hw1.vercel.app/",
          "website2_url": "https://github.com/fengyenchia/114-2_web_112405033_hw1",
          "website2_url_word": "Github"
        },
        {
          "imgSrc": "/programming/web.png",
          "title": "Web 程式設計 - 遊戲專題",
          "year": "2026",
          "description": "我在這個專題中，負責撰寫程式、設計其中一個小關卡、以及整合整體流程。",
          "website1_url": "https://final-web-design-dusky.vercel.app/",
          "website2_url": "https://github.com/Sou-Hisa/finalWebDesign",
          "website2_url_word": "Github"
        },
        {
          "imgSrc": "/programming/p5jsWebsite.png",
          "title": "side project - p5.js 作品管理網頁",
          "year": "2026",
          "description": "編寫 p5.js 程式可以在線上編輯器或是本機執行，不過線上版的有檔案儲存大小限制，且不支持熱鍵使用；而本機執行則面臨重複複製套件、浪費電腦空間的痛點。為了解決此問題，我開發了一個 p5.js 專案管理工具。利用 Node.js 建立自動化腳本，每次只需在終端機輸入一行命令即可產生新專案。這個工具的重點是共用核心套件，讓不同專案間不需要重複存放相同的 library 檔案，不僅節省空間，更能透過統一的介面有效管理與展示多個作品。",
          "website1_url": "https://fengyenchia.github.io/p5-project-archive/",
          "website2_url": "https://github.com/fengyenchia/p5-project-archive",
          "website2_url_word": "Github"
        },
        {
          "imgSrc": "/programming/p5js.png",
          "title": "P5.js 生成式藝術",
          "year": "2025",
          "description": "使用 p5.js 創作的作品",
          "website1_url": "https://openprocessing.org/user/522490#sketches",
          "website2_url": "https://www.editart.xyz/user/tz2RZFK3wYNAmrypca9JexAkUgNnEzYhBkX2",
          "website2_url_word": "EditArt"
        },
        {
          "imgSrc": "/programming/js.png",
          "title": "Javascript 應用程式設計 - 遊戲專題",
          "year": "2025",
          "description": "我在這個專題中，負責技術（javascript、p5.js）的部分",
          "website1_url": "https://fengyenchia.github.io/js_final_project/public/00/",
          "website2_url": "https://github.com/fengyenchia/js_final_project",
          "website2_url_word": "Github"
        },
    ],
  });
  
  await prisma.threeDWorks.createMany({
    data: [
        { 
            videoUrl: "/video/1.mp4", 
            year: "2026", 
            title: "Procedural LOGO Sequence Animation"
        },
        { 
            videoUrl: "/video/2.mp4", 
            year: "2026", 
            title: "NCCU LOGO Animation"
        },
        { 
            videoUrl: "/video/4.mp4", 
            year: "2026", 
            title: "Procedural LOGO Sequence Animation"
        },
        { 
            videoUrl: "/video/5.mp4", 
            year: "2026", 
            title: "Procedural Countdown Clock Animation"
        },
        { 
            videoUrl: "/video/3.mp4", 
            year: "2025", 
            title: "Alarm Clock Animation", 
            aspect: "aspect-square", 
            scaleClass: "scale-90 lg:scale-60", 
            enlargeScale: "scale-6" 
        }
    ],
  });

  console.log("🌱 資料庫測試種子資料植入成功！");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });