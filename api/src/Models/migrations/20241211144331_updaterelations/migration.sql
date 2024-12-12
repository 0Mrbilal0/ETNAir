/*
  Warnings:

  - You are about to drop the column `rentalId` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `rentalId` on the `Caracteristic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[adressId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[caracteristicId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adressId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "Caracteristic" DROP CONSTRAINT "Caracteristic_rentalId_fkey";

-- DropIndex
DROP INDEX "Adress_rentalId_key";

-- DropIndex
DROP INDEX "Caracteristic_rentalId_key";

-- DropIndex
DROP INDEX "Rental_userId_idx";

-- AlterTable
ALTER TABLE "Adress" DROP COLUMN "rentalId";

-- AlterTable
ALTER TABLE "Caracteristic" DROP COLUMN "rentalId";

-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "adressId" TEXT NOT NULL,
ADD COLUMN     "caracteristicId" TEXT;

-- CreateTable
CREATE TABLE "_AdressToRental" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdressToRental_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AdressToRental_B_index" ON "_AdressToRental"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_adressId_key" ON "Rental"("adressId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_caracteristicId_key" ON "Rental"("caracteristicId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_caracteristicId_fkey" FOREIGN KEY ("caracteristicId") REFERENCES "Caracteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdressToRental" ADD CONSTRAINT "_AdressToRental_A_fkey" FOREIGN KEY ("A") REFERENCES "Adress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdressToRental" ADD CONSTRAINT "_AdressToRental_B_fkey" FOREIGN KEY ("B") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
