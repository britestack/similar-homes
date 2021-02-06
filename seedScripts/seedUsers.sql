COPY users(username, pword, email)
FROM '/Users/bmalamudroam/Desktop/hackReactor/SDC/similar-homes-service/seedScripts/users.csv'
DELIMITER ','
CSV HEADER;