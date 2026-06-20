-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "motto" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About_Content" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "About_Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About_Education" (
    "id" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "About_Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About_Experience" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "About_Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About_Skill" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "About_Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignProject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "tag" TEXT[],
    "url" TEXT NOT NULL,

    CONSTRAINT "DesignProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgrammingProject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "website1_url" TEXT NOT NULL,
    "website2_url" TEXT NOT NULL,
    "website2_url_word" TEXT NOT NULL,

    CONSTRAINT "ProgrammingProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreeDWorks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "aspect" TEXT,
    "scaleClass" TEXT,
    "enlargeScale" TEXT,

    CONSTRAINT "ThreeDWorks_pkey" PRIMARY KEY ("id")
);
