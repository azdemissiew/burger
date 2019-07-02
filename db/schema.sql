-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

use  burgers_db;
CREATE TABLE burgers(id int auto_increment, burgers_name VARCHAR(30),devoured BOOLEAN )