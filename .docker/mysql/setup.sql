USE fcdb;

CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO people (name) VALUES ("Ari Benjamin");
INSERT INTO people (name) VALUES ("Daniela Angolar");