/*
  Warnings:

  - You are about to drop the `_AddressToRental` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AddressToRental" DROP CONSTRAINT "_AddressToRental_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToRental" DROP CONSTRAINT "_AddressToRental_B_fkey";

-- DropTable
DROP TABLE "_AddressToRental";

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
