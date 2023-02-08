-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_profileId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profilePersonalId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileStudentId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileStudentId_fkey" FOREIGN KEY ("profileStudentId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profilePersonalId_fkey" FOREIGN KEY ("profilePersonalId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
