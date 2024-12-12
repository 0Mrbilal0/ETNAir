/*
  Warnings:

  - The primary key for the `Adress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rentalId` on the `Adress` table. All the data in the column will be lost.
  - The primary key for the `Caracteristic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rentalId` on the `Caracteristic` table. All the data in the column will be lost.
  - The primary key for the `Picture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Rental` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[caracteristicId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rentalId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[adressId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adressId` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caracteristicId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_userId_fkey";

-- AlterTable
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_pkey",
DROP COLUMN "rentalId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Adress_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Adress_id_seq";

-- AlterTable
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_pkey",
DROP COLUMN "rentalId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Caracteristic_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Caracteristic_id_seq";

-- AlterTable
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "rentalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Picture_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Picture_id_seq";

-- AlterTable
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_pkey",
ADD COLUMN     "adressId" TEXT NOT NULL,
ADD COLUMN     "caracteristicId" TEXT NOT NULL,
ADD COLUMN     "rentalId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Rental_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Rental_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Rental_userId_key" ON "Rental"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_caracteristicId_key" ON "Rental"("caracteristicId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_rentalId_key" ON "Rental"("rentalId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_adressId_key" ON "Rental"("adressId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Adress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_caracteristicId_fkey" FOREIGN KEY ("caracteristicId") REFERENCES "Caracteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
