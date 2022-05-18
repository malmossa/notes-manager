CREATE DATABASE notesmanager;

CREATE TABLE note (
  note_id BIGSERIAL NOT NULL PRIMARY KEY,
  note_description VARCHAR(600) NOT NULL
);
