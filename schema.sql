CREATE DATABASE PastureMap;
\c PastureMap;
DROP SCHEMA if exists PastureMap CASCADE;

DROP TABLE if exists animals;

CREATE TABLE animals (
  id serial PRIMARY KEY,
  animalID VARCHAR(9)
);

CREATE TABLE weightRecords (
  id serial PRIMARY KEY,
  animalWeight NUMERIC(5, 1),
  weighDate VARCHAR(200)
);
