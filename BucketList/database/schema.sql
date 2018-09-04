DROP DATABASE bucket_list;
CREATE DATABASE bucket_list;

-- Connect to the database
\c bucket_list

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  column_1 INTEGER NOT NULL,
  item_name TEXT,
  done BOOLEAN
);