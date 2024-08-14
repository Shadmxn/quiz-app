DROP TABLE IF EXISTS attempts CASCADE;
CREATE TABLE attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  result INTEGER NOT NULL,
  result_link TEXT NOT NULL
);