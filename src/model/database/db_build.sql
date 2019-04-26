BEGIN;

DROP TABLE IF EXISTS dreams CASCADE;

CREATE TABLE dreams (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    keyword TEXT NOT NULL 
);

INSERT INTO dreams (name, date, description, keyword) VALUES ('christopher', '2008-07-08', '(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream))))))))))))', 'inception'),
('martin', '1963-08-28', 'I have a dream.', 'freedom');

COMMIT;
