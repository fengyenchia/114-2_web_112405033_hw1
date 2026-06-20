/*
  Warnings:

  - You are about to drop the column `tag` on the `DesignProject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DesignProject" DROP COLUMN "tag",
ADD COLUMN     "tags" TEXT[];
