drop database if exists movielist;

create database movielist;

use movielist;

create table movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT(50) UNIQUE,
    original_title VARCHAR(100),
    runtime INT(20),
    year VARCHAR(10),
    poster_path VARCHAR(100),
    watched VARCHAR(100)
)