CREATE TYPE "type_user" AS ENUM (
  'tenant',
  'owner',
  'admin'
);

CREATE TYPE "type_advert" AS ENUM (
  'house',
  'flat',
  'castle',
  'tinyhouse'
);

CREATE TYPE "type_state" AS ENUM (
  'ongoing',
  'canceled',
  'tocome',
  'finished'
);

CREATE TABLE "User" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "about_me" varchar,
  "picture" varchar,
  "phone_number" char(10),
  "password" varchar NOT NULL,
  "user_type" type_user NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "Advert" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "nb_person" integer NOT NULL DEFAULT 2,
  "price" integer NOT NULL,
  "description" varchar,
  "available_date" timestamp NOT NULL,
  "type" type_advert NOT NULL,
  "user_id" integer UNIQUE NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "Caracteristics" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "nb_bedroom" integer,
  "nb_bathroom" integer,
  "text" varchar NOT NULL,
  "advert_id" integer UNIQUE NOT NULL
);

CREATE TABLE "Picture" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "link" varchar NOT NULL,
  "advert_id" integer UNIQUE NOT NULL
);

CREATE TABLE "Reservation" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "total_price" integer NOT NULL,
  "start_date" timestamp NOT NULL,
  "end_date" timestamp NOT NULL,
  "state" type_state NOT NULL,
  "nb_person" integer NOT NULL DEFAULT 1,
  "user_id" integer UNIQUE NOT NULL,
  "advert_id" integer UNIQUE NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  CONSTRAINT UC_StartDate UNIQUE (id, start_date),
  CONSTRAINT UC_EndDate UNIQUE (id, end_date),
  CONSTRAINT check_start_end_date CHECK (start_date <= end_date)
);

CREATE TABLE "Review" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "rating" integer NOT NULL DEFAULT 1,
  "text" varchar,
  "reservation_id" integer UNIQUE NOT NULL,
  "user_id" integer UNIQUE NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "Address" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY NOT NULL,
  "country" varchar NOT NULL,
  "postal_code" char(5) NOT NULL,
  "city" varchar NOT NULL,
  "street" varchar NOT NULL,
  "address_supplement" varchar,
  "advert_id" integer UNIQUE NOT NULL,
  "reservation_id" integer UNIQUE NOT NULL
);

CREATE TABLE "User_Advert" (
  "User_id" integer,
  "Advert_user_id" integer,
  PRIMARY KEY ("User_id", "Advert_user_id")
);

ALTER TABLE "User_Advert" ADD FOREIGN KEY ("User_id") REFERENCES "User" ("id");

ALTER TABLE "User_Advert" ADD FOREIGN KEY ("Advert_user_id") REFERENCES "Advert" ("user_id");


ALTER TABLE "Caracteristics" ADD FOREIGN KEY ("advert_id") REFERENCES "Advert" ("id");

ALTER TABLE "Advert" ADD FOREIGN KEY ("id") REFERENCES "Picture" ("advert_id");

ALTER TABLE "User" ADD FOREIGN KEY ("id") REFERENCES "Reservation" ("user_id");

ALTER TABLE "Advert" ADD FOREIGN KEY ("id") REFERENCES "Reservation" ("advert_id");

ALTER TABLE "Review" ADD FOREIGN KEY ("reservation_id") REFERENCES "Reservation" ("id");

ALTER TABLE "Review" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Address" ADD FOREIGN KEY ("advert_id") REFERENCES "Advert" ("id");

ALTER TABLE "Address" ADD FOREIGN KEY ("reservation_id") REFERENCES "Reservation" ("id");
