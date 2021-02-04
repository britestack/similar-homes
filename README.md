# Similar Homes Photo Carousel

## API Endpoints

#### KEY:
  ##### Home info: 
  ```json
  { 
    "id": "SERIAL",
    "dateListed": "DATE",
    "price": "INT",
    "imageUrl": "VARCHAR()", 
    "beds": "SMALLINT",
    "bath": "SMALLINT",
    "sqft": "INT",
    "street": "VARCHAR(30)",
    "zipcode": "VARCHAR(10)",
    "city": "VARCHAR(30)",
    "state": "VARCHAR(2)",
    "score": "INT",
  }
  ```
#### `PATCH` /api/user/:homeid
  Updates whether a home has been saved by a user
  - `request` 
      - request body: `{ saved: boolean }`
  - `response`
      - response code (success): `200`
 
#### `GET` /api/homes/new/:homeid
  Gets up to 20 homes in the same area of given home, that have been listed recently
  - `request` 
      - request params: `{ homeid: int }`
  - `response`
      - response code (success): `204`
      - response body: `[ { home1 info },..., { homeN info } ]`  (N <= 20)
     
#### `GET` /api/homes/similar/:homeid
  Gets up to 20 homes in the same area of given home, that are similar in size and price
  - `request` 
      - request params: `{ homeid: int }`
  - `response`
      - response code (success): `204`
      - response body: `[ {home1 info},..., {homeN info} ]`  (N <= 20)
#### `POST` /api/home
  Add new home to database
  - `request` 
      - request params: `{ homeid: int }`
      - request body: `{ home info }`
  - `response`
      - response code (success): `201`

#### `DELETE` api/home/:homeid
  Remove home from the database
  - `request` 
     - request params: `{ homeid: int }`
  - `response`
     - response code (success): `200`
