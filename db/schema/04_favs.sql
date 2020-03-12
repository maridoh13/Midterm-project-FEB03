DROP TABLE IF EXISTS favs CASCADE;
CREATE TABLE favs (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  liked_at TIMESTAMP
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to labber;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to labber;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to labber;