
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--CONTACT_INFO TABLE
CREATE TABLE "contact_info" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(100),
"phoneNumber" VARCHAR(100),
"email" VARCHAR(100),
"roles" VARCHAR(500),
"addressLine1" VARCHAR(100),
"addressLine2" VARCHAR(100),
"city" VARCHAR(50),
"state" VARCHAR(50),
"zipCode" INT,
"user_id" INT REFERENCES "user"
);