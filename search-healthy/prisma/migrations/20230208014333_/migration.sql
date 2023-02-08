/*
  Warnings:

  - You are about to drop the column `profilePersonalId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileStudentId` on the `User` table. All the data in the column will be lost.
  - Added the required column `personalId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profilePersonalId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileStudentId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "personalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePersonalId",
DROP COLUMN "profileStudentId";

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
