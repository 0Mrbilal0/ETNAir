/*
  Warnings:

  - You are about to drop the column `caracteristicId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `rentalId` on the `Rental` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Rental_caracteristicId_key";

-- DropIndex
DROP INDEX "Rental_rentalId_key";

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "caracteristicId",
DROP COLUMN "rentalId";
