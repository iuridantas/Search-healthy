-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileStudentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileTeacherId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "profileStudentId" DROP NOT NULL,
ALTER COLUMN "profileTeacherId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileStudentId_fkey" FOREIGN KEY ("profileStudentId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileTeacherId_fkey" FOREIGN KEY ("profileTeacherId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
