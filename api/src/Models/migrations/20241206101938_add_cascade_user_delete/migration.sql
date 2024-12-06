-- DropForeignKey
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_userId_fkey";

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
