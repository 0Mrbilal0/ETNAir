/*
  Warnings:

  - You are about to drop the `Picture` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `picture` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_rentalId_fkey";

-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "picture" TEXT NOT NULL;

-- DropTable
DROP TABLE "Picture";
