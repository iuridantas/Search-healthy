/*
  Warnings:

  - You are about to drop the column `geralId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileTeacherId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileStudentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileTeacherId_fkey";

-- DropIndex
DROP INDEX "User_geralId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "geralId",
DROP COLUMN "profileTeacherId",
ADD COLUMN     "profilePersonalId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileStudentId_fkey" FOREIGN KEY ("profileStudentId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profilePersonalId_fkey" FOREIGN KEY ("profilePersonalId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
