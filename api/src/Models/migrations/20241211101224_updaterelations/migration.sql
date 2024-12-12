/*
  Warnings:

  - You are about to drop the column `adressId` on the `Rental` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rentalId]` on the table `Adress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalId` to the `Adress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_adressId_fkey";

-- DropIndex
DROP INDEX "Rental_adressId_key";

-- AlterTable
ALTER TABLE "Adress" ADD COLUMN     "rentalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "adressId";

-- CreateIndex
CREATE UNIQUE INDEX "Adress_rentalId_key" ON "Adress"("rentalId");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
