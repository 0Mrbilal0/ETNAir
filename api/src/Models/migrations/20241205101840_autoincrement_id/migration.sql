/*
  Warnings:

  - The primary key for the `Adress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Adress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Advert` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Advert` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Caracteristic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Caracteristic` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Picture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Picture` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `advertId` on the `Adress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Advert` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `advertId` on the `Caracteristic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `advertId` on the `Picture` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_advertId_fkey";

-- DropForeignKey
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_userId_fkey";

-- DropForeignKey
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_advertId_fkey";

-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_advertId_fkey";

-- AlterTable
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "advertId",
ADD COLUMN     "advertId" INTEGER NOT NULL,
ADD CONSTRAINT "Adress_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Advert_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "advertId",
ADD COLUMN     "advertId" INTEGER NOT NULL,
ADD CONSTRAINT "Caracteristic_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "advertId",
ADD COLUMN     "advertId" INTEGER NOT NULL,
ADD CONSTRAINT "Picture_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caracteristic" ADD CONSTRAINT "Caracteristic_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
