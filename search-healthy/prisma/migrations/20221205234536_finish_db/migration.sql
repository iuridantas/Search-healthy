/*
  Warnings:

  - Added the required column `profileStudentId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileTeacherId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileStudentId" TEXT NOT NULL,
ADD COLUMN     "profileTeacherId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "exercises" TEXT[],
    "repetition" TEXT NOT NULL,
    "aerobic" TEXT NOT NULL,
    "stretching" TEXT NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tall" DOUBLE PRECISION NOT NULL,
    "weigth" DOUBLE PRECISION NOT NULL,
    "objective" TEXT NOT NULL,
    "gym" TEXT NOT NULL,
    "services" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Training_id_key" ON "Training"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileStudentId_fkey" FOREIGN KEY ("profileStudentId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileTeacherId_fkey" FOREIGN KEY ("profileTeacherId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
