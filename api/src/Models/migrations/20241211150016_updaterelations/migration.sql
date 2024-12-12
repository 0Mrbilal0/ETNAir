/*
  Warnings:

  - You are about to drop the `Adress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdressToRental` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AdressToRental" DROP CONSTRAINT "_AdressToRental_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdressToRental" DROP CONSTRAINT "_AdressToRental_B_fkey";

-- DropTable
DROP TABLE "Adress";

-- DropTable
DROP TABLE "_AdressToRental";

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddressToRental" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AddressToRental_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AddressToRental_B_index" ON "_AddressToRental"("B");

-- AddForeignKey
ALTER TABLE "_AddressToRental" ADD CONSTRAINT "_AddressToRental_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToRental" ADD CONSTRAINT "_AddressToRental_B_fkey" FOREIGN KEY ("B") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
