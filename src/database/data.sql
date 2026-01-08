-- Active: 1766419843621@@127.0.0.1@5433@jwt
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) not null UNIQUE,
  email text not NULL UNIQUE,
  password VARCHAR(255) not NULL
)