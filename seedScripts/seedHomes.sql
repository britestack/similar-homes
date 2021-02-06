COPY homes(dateListed, price, imageUrl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased, new_home)
FROM '/Users/bmalamudroam/Desktop/hackReactor/SDC/similar-homes-service/seedScripts/homes.csv'
DELIMITER ','
CSV HEADER;