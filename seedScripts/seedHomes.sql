COPY homes(dateListed, price, imageUrl, beds, baths, sqft, street, zipcode, city_name, state_name, score, realtor, decreased)
FROM '/Users/bmalamudroam/Desktop/hackReactor/SDC/similar-homes-service/seedScripts/homes.csv'
DELIMITER ','
CSV HEADER;