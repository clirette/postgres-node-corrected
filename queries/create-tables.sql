CREATE TABLE "Users" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "firstname" varchar,
  "lastname" varchar,
  "email" varchar UNIQUE,
  "hash" varchar,
  "picture" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);


CREATE TABLE "Articles" (
  "id" int PRIMARY KEY,
  "title" varchar,
  "body" varchar,
  "minutesRead" int,
  "createdAt" timestamp,
  "updatedAt" timestamp
);


CREATE TABLE "Categories" (
  "name" varchar PRIMARY KEY
);

CREATE TABLE "ArticleAuthors" (
  "authorId" int  NOT NULL,
  "articleId" int  NOT NULL,
  "createdAt" timestamp  NOT NULL,
  "updatedAt" timestamp  NOT NULL,
  CONSTRAINT pk1 PRIMARY KEY ("authorId","articleId")
);


CREATE TABLE "ArticleCategories" (
  "articleId" int NOT NULL,
  "name" varchar NOT NULL,
  CONSTRAINT pk2 PRIMARY KEY ("articleId","name")
);

ALTER TABLE "ArticleAuthors" ADD FOREIGN KEY ("authorId") REFERENCES "Users" ("id");
ALTER TABLE "ArticleAuthors" ADD FOREIGN KEY ("articleId") REFERENCES "Articles" ("id");
ALTER TABLE "ArticleCategories" ADD FOREIGN KEY ("articleId") REFERENCES "Articles" ("id");
ALTER TABLE "ArticleCategories" ADD FOREIGN KEY ("name") REFERENCES "Categories" ("name");
