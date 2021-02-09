import http from "k6/http";
// import { check } from 'k6';
// import { Rate } from 'k6/metrics';

// export errorRate = new Rate('errorRate');

export const options = {
  stages: [
    { duration: "2m", target: 100 },
    { duration: "5m", target: 200 },
    { duration: "2m", target: 500 },
    { duration: "5m", target: 500 },
    { duration: "2m", target: 1000 },
    { duration: "5m", target: 1500 },
    { duration: "5m", target: 2000 },
    { duration: "5m", target: 1000 },
    { duration: "2m", target: 200 },
  ],
};

export default function() {
  const randHomeIndex = Math.floor(Math.random() * 10000000);
  const randUserIndex = Math.floor(Math.random() * 10000000) + 20000002;
  let resps = http.batch([
    ["GET", `http://localhost:3001/api/homes/${randHomeIndex}`],
    ["GET", `http://localhost:3001/api/users/${randUserIndex}`],
    ["GET", `http://localhost:3001/api/homes/similar/${randHomeIndex}`],
  ]);
};
