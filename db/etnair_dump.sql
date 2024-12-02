CREATE TYPE userType AS ENUM ('tenant', 'owner', 'admin');
CREATE TYPE advertType AS ENUM (
    'house',
    'flat',
    'castle',
    'tinyhouse'
);
CREATE TABLE IF NOT EXISTS "User" (
    "id" integer PRIMARY KEY,
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    "picture" varchar,
    "phone_number" char(10),
    "password" varchar NOT NULL,
    "user_type" userType NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL
);
CREATE TABLE IF NOT EXISTS "Advert" (
    "id" integer PRIMARY KEY,
    "title" varchar NOT NULL,
    "nb_person" integer NOT NULL DEFAULT 1,
    "price" integer NOT NULL,
    "description" varchar,
    "available_date" timestamp NOT NULL,
    "type" advertType NOT NULL,
    "user_id" integer NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL
);
CREATE TABLE IF NOT EXISTS "Picture" (
    "id" integer PRIMARY KEY,
    "link" varchar NOT NULL,
    "advert_id" integer NOT NULL
);
CREATE TABLE IF NOT EXISTS "Reservation" (
    "id" integer PRIMARY KEY,
    "title" varchar NOT NULL,
    "total_price" integer NOT NULL,
    "start_date" timestamp NOT NULL,
    "end_date" timestamp NOT NULL,
    "user_id" integer NOT NULL,
    "advert_id" integer NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    CONSTRAINT UC_EndDate UNIQUE (advert_id, end_date),
    CONSTRAINT UC_StartDate UNIQUE (advert_id, start_date),
    CONSTRAINT UC_StartInfDef CHECK (start_date < end_date)
);
CREATE TABLE IF NOT EXISTS "User_Advert" (
    "user_id" integer,
    "advert_user_id" integer,
    PRIMARY KEY ("user_id", "advert_user_id"),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "User" (id),
    CONSTRAINT fk_advert FOREIGN KEY (advert_user_id) REFERENCES "Advert" (id)
);
ALTER TABLE "Picture"
ADD FOREIGN KEY ("advert_id") REFERENCES "Advert" ("id");
ALTER TABLE "Reservation"
ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Reservation"
ADD FOREIGN KEY ("advert_id") REFERENCES "Advert" ("id");
