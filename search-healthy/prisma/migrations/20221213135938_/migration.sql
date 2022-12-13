/*
  Warnings:

  - You are about to drop the column `personalsIds` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `studentsIds` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "personalsIds",
DROP COLUMN "studentsIds";
