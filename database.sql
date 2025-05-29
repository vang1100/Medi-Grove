-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (30) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    );
 
 CREATE TABLE "category" (
 	"id" SERIAL PRIMARY KEY,
 	"type" VARCHAR (200) NOT NULL
 		);
 	
 CREATE TABLE "card" (
 	"id" SERIAL PRIMARY KEY,
 	"category_id" INT REFERENCES "category" (id),
 	"name" 	VARCHAR (200) NOT NULL,
 	"description" VARCHAR (2000) NOT NULL
 	);
 	
 CREATE TABLE "journal" (
 	"id" SERIAL PRIMARY KEY,
 	"user_id" INT REFERENCES "user" (id),
 	"title" VARCHAR (100) NOT NULL,
 	"text" VARCHAR (5000) NOT NULL
 	);
 
 CREATE TABLE "user_card_like" (
 	PRIMARY KEY ("user_id", "card_id"),
 	"user_id" INT REFERENCES "user" (id),
    "card_id" INT REFERENCES "card" (id)
    );


INSERT INTO "category" 
("type")
VALUES 
('Walking Thoughts'), ('Affirmations'), ('Tea Meditation'), ('Earths Messages')
;

INSERT INTO "card"
("category_id", "name", "description")
VALUES
('1', 'Embracing Imperfection', 'Nature provides us with such beautiful examples of the brillance inheret in imperfection. There are albino animals, flowers that grow from concree, and an entire crooked forest in Poland. Each of these occurences reminds us that things do not need to be perfect in order to be beautiful valuable, or appreciated. Today as you walk, examime how you may have judged yourself as imperfect, flawed. How can you reframe your relationship with yourself and embrace your imperfections?'),
('2', 'You Will Bloom', 'From bud to bloom, flowers remind us that they journey of becoming our fullest selves takes time. You cannot rush the blooming process; all you can do is provide water and light and nutrients, and wait for the magnificence to emerge. Today, consider the areas of your life where you are still budding. What can you do to support those buds? When you feel stuck or unsure, remind yourself of the flowers journey and repeat, I will bloom'),
('3', 'I Love You', 'Holding a warm cup reminds us of the fleeting nature of time and relationships. It encourages us to appreciate the people around us while they are here and embrace the beauty of the present moment. Who do you love today? Who are you grateful for?'),
('4', 'You Are Your True Nature', 'A tree with no leaves is still a tree. When you dont feel like yourself, when youre going throuugh times of change and loss, remember there is nothing incomplete or inadequate about your being. Nothing can separate you from your true nature.');

SELECT "type", "name", "description", "is_liked" FROM "card"
JOIN "category" ON "category"."id" = "card"."category_id";

SELECT * FROM "journal";

SELECT * FROM "card";

SELECT * FROM "category";

SELECT "type", "name", "description"
FROM "category" JOIN "card"
ON "category"."id" = "card"."category_id";



