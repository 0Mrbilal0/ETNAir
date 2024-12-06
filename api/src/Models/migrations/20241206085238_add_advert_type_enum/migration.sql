/*
  Warnings:

  - Changed the type of `type` on the `Advert` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Types" AS ENUM ('HOUSE', 'APARTMENT', 'CASTLE', 'TINY_HOUSE');

-- AlterTable
ALTER TABLE "Advert" DROP COLUMN "type",
ADD COLUMN     "type" "Types" NOT NULL;
