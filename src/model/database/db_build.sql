BEGIN;

DROP TABLE IF EXISTS dreams CASCADE;

CREATE TABLE dreams (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    keyword TEXT NOT NULL 
);

INSERT INTO dreams (name, date, description, keyword) VALUES ('Christopher', '2008-07-08', '(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream(dream))))))))))))', 'inception'),
('Martin', '1963-08-28', 'I have a dream.', 'freedom');

COMMIT;
