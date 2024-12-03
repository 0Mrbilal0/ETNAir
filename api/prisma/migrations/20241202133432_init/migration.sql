-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "about_me" TEXT,
    "picture" TEXT,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advert" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "nb_person" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "advert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caracteristics" (
    "id" INTEGER NOT NULL,
    "nb_bedroom" INTEGER,
    "nb_bathroom" INTEGER,
    "text" TEXT NOT NULL,
    "advert_id" INTEGER NOT NULL,

    CONSTRAINT "caracteristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "picture" (
    "id" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "advert_id" INTEGER NOT NULL,

    CONSTRAINT "picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservation" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "total_price" INTEGER NOT NULL,
    "nb_person" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "advert_id" INTEGER NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT,
    "reservation_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "address_supplement" TEXT,
    "advert_id" INTEGER NOT NULL,
    "reservation_id" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_advert" (
    "User_id" INTEGER NOT NULL,
    "Advert_user_id" INTEGER NOT NULL,

    CONSTRAINT "user_advert_pkey" PRIMARY KEY ("User_id")
);
