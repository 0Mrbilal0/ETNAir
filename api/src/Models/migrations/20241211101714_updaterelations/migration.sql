/*
  Warnings:

  - A unique constraint covering the columns `[rentalId]` on the table `Caracteristic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalId` to the `Caracteristic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_caracteristicId_fkey";

-- AlterTable
ALTER TABLE "Caracteristic" ADD COLUMN     "rentalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Caracteristic_rentalId_key" ON "Caracteristic"("rentalId");

-- AddForeignKey
ALTER TABLE "Caracteristic" ADD CONSTRAINT "Caracteristic_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
