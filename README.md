# Similar Homes Photo Carousel

## API Endpoints

#### KEY:
  ##### Home info: 
  ```json
  { 
    "dateListed": "INTEGER",
    "price": "INTEGER",
    "imageUrl": "VARCHAR(200)", 
    "beds": "SMALLINT",
    "bath": "SMALLINT",
    "sqft": "INTEGER",
    "street": "VARCHAR(30)",
    "zipcode": "INTEGER",
    "city": "VARCHAR(30)",
    "state": "VARCHAR(2)",
    "score": "INT",
    "realtor": "VARCHAR(40)",
    "decreased": "BOOLEAN",
  }
  ```
  ##### User info:
  ```json 
  { 
    "username": "varchar(80)",
    "pword": "varchar(80)",
    "email": "varchar(80)",
  }
  ```
  
 ### USERS
 
 #### `GET` /api/users/:userid
 Gets user with the given userid
 - `request` 
     - request params: `{ userid: int }`
 - `response`
     - response code (success): `200`
     - response body: `{ user info }`

#### `POST` /api/users
  Add new user to database
  - `request` 
      - request body: `{ user info }`
  - `response`
      - response code (success): `201`     

#### `PATCH` /api/userSaves
  Updates whether a home has been saved by a user
  - `request` 
      - request body: `{ user_id: int, home_id: int, saved: boolean }`
  - `response`
      - response code (success): `200`
      
#### `PATCH` /api/users/:userid
  Gets user with the given userid
  - `request` 
      - request params: `{ userid: int }`
      - request body: `{ new user info }`
  - `response`
      - response code (success): `200`
      - response body: `[ { user info } ]`
      
#### `DELETE` api/user/:userid
  Remove user from the database
  - `request` 
     - request params: `{ userid: int }`
  - `response`
     - response code (success): `200`

### HOMES

#### `GET` /api/homes/:homeid
  Gets info of home with given homeid
  - `request` 
      - request params: `{ homeid: int }`
  - `response`
      - response code (success): `200`
      - response body: `[ { home info } ]`
     
#### `GET` /api/homes/new/:homeid
  Gets up to 8 homes in the same area of given home, that have been listed recently
  - `request` 
      - request params: `{ homeid: int }`
  - `response`
      - response code (success): `204`
      - response body: `[ { home1 info },..., { homeN info } ]`  (N <= 20)

#### `GET` /api/homes/similar/:homeid
  Gets up to 8 homes in the same area of given home, that are similar in size and price
  - `request` 
      - request params: `{ homeid: int }`
  - `response`
      - response code (success): `204`
      - response body: `[ {home1 info},..., {homeN info} ]`  (N <= 20)
      
#### `POST` /api/home
  Add new home to database
  - `request` 
      - request body: `{ home info }`
  - `response`
      - response code (success): `201`
      
#### `PATCH` /api/homes/:homeid
  Gets home with the given userid
  - `request` 
      - request params: `{ homeid: int }`
      - request body: `{ new home info }`
  - `response`
      - response code (success): `200`
      - response body: `[ { home info } ]`

#### `DELETE` api/home/:homeid
  Remove home from the database
  - `request` 
     - request params: `{ homeid: int }`
  - `response`
     - response code (success): `200`
