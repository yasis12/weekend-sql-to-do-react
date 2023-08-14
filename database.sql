-- weekend-to-do-app is DB name

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	task varchar(500),
	complete boolean
);

INSERT INTO "tasks" ("task", "complete") 
VALUES ('Wash the Dishes', false), ('Take out the trash', false), ('Do homework assignment for the week', true)
