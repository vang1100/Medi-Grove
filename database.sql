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
 	"description" VARCHAR (2000) NOT NULL,
 	"is_liked" BOOLEAN DEFAULT FALSE
 	);
 	
 CREATE TABLE "journal" (
 	"id" SERIAL PRIMARY KEY,
 	"user_id" INT REFERENCES "user" (id),
 	"title" VARCHAR (100) NOT NULL,
 	"text" VARCHAR (5000) NOT NULL
 	);

INSERT INTO "category" 
("type")
VALUES 
('Walking Thoughts'), ('Affirmations'), ('Tea Meditation'), ('Earths Messages')
;

INSERT INTO "card"
("category_id", "name", "description")
VALUES
-- Category 1: Embracing Imperfection
('1', 'Cracks Let the Light In', 'Kintsugi, the Japanese art of mending broken pottery with gold, teaches us that our scars can become our greatest beauty. Today, reflect on a challenge you have faced that left a visible or invisible mark. How might that “crack” be a source of strength, wisdom, or light in your life?'),
('1', 'Wabi-Sabi Wonder', 'Wabi-sabi is the appreciation of the imperfect, impermanent, and incomplete. Notice a stone path, a chipped mug, or a weathered piece of wood. What story does its imperfection tell? Can you extend the same appreciation to yourself?'),
('1', 'Uneven Paths', 'A hiking trail is rarely perfectly straight — it twists, climbs, and dips. These variations make the journey more interesting. Consider how the unexpected turns in your life have shaped you. What has an uneven path taught you?'),
('1', 'The Beauty of Weathered Hands', 'Hands that have worked, created, and cared are often marked with lines, calluses, and scars. These signs tell a story of love, effort, and living fully. What “weathered” parts of you tell your story?'),

-- Category 2: You Will Bloom
('2', 'Seasons of Growth', 'Some seasons call us to plant seeds, others to rest, and still others to bloom. Which season of growth are you in today? How can you honor the pace your soul is asking for?'),
('2', 'Roots Before Roses', 'A flower’s beauty is only possible because of its strong, unseen roots. What roots are you growing in your life right now — skills, values, relationships — that will sustain your future bloom?'),
('2', 'The Waiting Garden', 'A garden does not bloom all at once. Some plants take weeks, others years. Consider the parts of your life that may simply need more time. Can you wait with patience and trust?'),
('2', 'Opening to the Sun', 'A sunflower follows the sun across the sky, opening fully each morning. What “light” do you need to turn toward today? What warms and nourishes your spirit?'),

-- Category 3: I Love You
('3', 'Love in the Little Things', 'Sometimes love shows up in a warm cup of tea, a shared laugh, or a thoughtful message. Who has shown you love in a quiet, everyday way? How can you offer that love back?'),
('3', 'Gratitude Threads', 'Every relationship is woven from small threads of kindness, patience, and joy. Who are the people whose threads are part of your life’s tapestry?'),
('3', 'The Gift of Presence', 'To say “I love you” can be as simple as giving someone your full attention. Who can you be truly present with today?'),
('3', 'Ripples of Love', 'A kind word can ripple out far beyond the moment. What words of love have you received that still echo in your heart?'),

-- Category 4: You Are Your True Nature
('4', 'Still the Mountain', 'A mountain does not lose its essence when hidden by clouds. Even in foggy moments, you remain who you are. When life feels unclear, what inner truths remain solid for you?'),
('4', 'Ocean Without End', 'The ocean is still the ocean whether calm or stormy. How can you remember that your worth is constant, regardless of your current emotional weather?'),
('4', 'The Leaf and the Tree', 'A single leaf may change colors and fall, but it remains part of the tree’s life. How have your changes still reflected your deeper self?'),
('4', 'Sky Beyond the Storm', 'No matter how fierce the storm, the sky above is vast and unchanging. What part of you remains peaceful and steady despite life’s turbulence?');



