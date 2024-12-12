/*
  Warnings:

  - A unique constraint covering the columns `[caracteristicId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rentalId]` on the table `Rental` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `caracteristicId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "caracteristicId" TEXT NOT NULL,
ADD COLUMN     "rentalId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Rental_caracteristicId_key" ON "Rental"("caracteristicId");

-- CreateIndex
CREATE UNIQUE INDEX "Rental_rentalId_key" ON "Rental"("rentalId");
