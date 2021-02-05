DROP DATABASE IF EXISTS carouselhomes;
CREATE DATABASE carouselhomes;

\c carouselhomes;

CREATE TABLE homes (
  home_id serial PRIMARY KEY,
  dateListed Date,
  price integer NOT NULL,
  imageUrl varchar(200),
  beds smallint,
  bath smallint,
  sqft integer NOT NULL,
  street varchar(30),
  zipcode varchar(10) NOT NULL,
  city_name varchar(30),
  state_name varchar(2),
  score integer
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
  user_name varchar(24),
  pass_word varchar(24),
  email varchar(50)
);

CREATE TABLE userSaves (
  id serial PRIMARY KEY,
  user_id integer NOT NULL REFERENCES homes (user_id),
  home_id integer NOT NULL REFERENCES homes (home_id)
);