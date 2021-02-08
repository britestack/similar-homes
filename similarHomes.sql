DROP DATABASE IF EXISTS carouselhomes;
CREATE DATABASE carouselhomes;

\c carouselhomes;

CREATE TABLE homes (
  home_id serial PRIMARY KEY,
  dateListed integer,
  price integer NOT NULL,
  imageUrl varchar(200),
  beds smallint,
  baths smallint,
  sqft integer NOT NULL,
  street varchar(30),
  zipcode INTEGER NOT NULL,
  city_name varchar(30),
  state_name varchar(2),
  score integer,
  realtor varchar(40),
  decreased boolean
);

CREATE TABLE similarHomes (
  id serial PRIMARY KEY,
  base_home_id integer NOT NULL REFERENCES homes (home_id),
  related_home_id integer NOT NULL REFERENCES homes (home_id)
);

CREATE TABLE newNearHomes (
  id serial PRIMARY KEY,
  base_home_id integer NOT NULL REFERENCES homes (home_id),
  new_home_id integer NOT NULL REFERENCES homes (home_id)
);

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username varchar(80),
  pword varchar(80),
  email varchar(80)
);

CREATE TABLE userSaves (
  id serial PRIMARY KEY,
  user_id integer NOT NULL REFERENCES users (user_id),
  home_id integer NOT NULL REFERENCES homes (home_id)
);

CREATE INDEX zip_score_index ON homes(zipcode) INCLUDE (score);
CREATE INDEX zip_date_index ON homes(zipcode) INCLUDE (dateListed);
CREATE INDEX date_index ON homes(datelisted) INCLUDE (home_id, zipcode);