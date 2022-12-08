/*
  Warnings:

  - The `services` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[geralId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "services",
ADD COLUMN     "services" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "geralId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_geralId_key" ON "User"("geralId");

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
