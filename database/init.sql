CREATE DATABASE IF NOT EXISTS bandnames; -- Create the database if it doesn't exist
USE bandnames; -- Switch to the bandnames database
CREATE TABLE IF NOT EXISTS -- Create adjectives table
 adjectives (
    id INT AUTO_INCREMENT PRIMARY KEY,
adjecttive VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS -- Create nouns table
 nouns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    noun VARCHAR(255) NOT NULL
);
INSERT INTO adjectives (adjecttive) VALUES -- Insert sample adjectives
('Funky'),
('Groovy'),
('Electric'),
('Mellow'),
('Wild'),
('Sonic'),
('Cosmic'),
('Loud'),
('Silent'),
('Vibrant');
INSERT INTO nouns (noun) VALUES -- Insert sample nouns
('Tigers'),
('Waves'),
('Dragons'),
('Riders'),
('Echoes'),
('Storms'),
('Shadows'),
('Flames'),
('Wolves'),
('Giants');