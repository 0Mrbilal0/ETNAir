-- CreateTable
CREATE TABLE "Adress" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "advertId" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advert" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "nb_person" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "available_date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Advert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caracteristic" (
    "id" TEXT NOT NULL,
    "nb_bedroom" INTEGER NOT NULL,
    "nb_bathroom" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "advertId" TEXT NOT NULL,

    CONSTRAINT "Caracteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "advertId" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "about_me" TEXT,
    "phone_number" TEXT NOT NULL,
    "user_type" TEXT NOT NULL DEFAULT 'client',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advert" ADD CONSTRAINT "Advert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caracteristic" ADD CONSTRAINT "Caracteristic_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_advertId_fkey" FOREIGN KEY ("advertId") REFERENCES "Advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
