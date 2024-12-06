/*
  Warnings:

  - The `user_type` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'CLIENT');

-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_advertId_fkey";

-- DropForeignKey
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_advertId_fkey";

-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_advertId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_type",
ADD COLUMN     "user_type" "UserType" NOT NULL DEFAULT 'CLIENT';

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caracteristic" ADD CONSTRAINT "Caracteristic_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE CASCADE ON UPDATE CASCADE;
