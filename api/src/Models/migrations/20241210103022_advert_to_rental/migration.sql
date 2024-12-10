/*
  Warnings:

  - You are about to drop the column `advertId` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `advertId` on the `Caracteristic` table. All the data in the column will be lost.
  - You are about to drop the column `advertId` on the `Picture` table. All the data in the column will be lost.
  - You are about to drop the `Advert` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rentalId` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentalId` to the `Caracteristic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentalId` to the `Picture` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE "Adress" DROP COLUMN "advertId",
ADD COLUMN     "rentalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Caracteristic" DROP COLUMN "advertId",
ADD COLUMN     "rentalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "advertId",
ADD COLUMN     "rentalId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Advert";

-- CreateTable
CREATE TABLE "Rental" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "nb_person" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available_date" TIMESTAMP(3) NOT NULL,
    "type" "Types" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Rental_userId_idx" ON "Rental"("userId");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caracteristic" ADD CONSTRAINT "Caracteristic_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE CASCADE ON UPDATE CASCADE;
