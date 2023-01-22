/*
  Warnings:

  - You are about to drop the column `services` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `tall` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `weigth` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "services",
DROP COLUMN "tall",
DROP COLUMN "weigth";
