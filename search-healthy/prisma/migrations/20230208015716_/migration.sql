/*
  Warnings:

  - You are about to drop the column `personalId` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_personalId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "personalId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilePersonalId" TEXT,
ADD COLUMN     "profileStudentId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profilePersonalId_fkey" FOREIGN KEY ("profilePersonalId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileStudentId_fkey" FOREIGN KEY ("profileStudentId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
