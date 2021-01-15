let localStorage = require("./LocalStorage");

console.log(`localStorage length : ${localStorage.length}`);

var uid = localStorage.getItem("user_id");

console.log(`user_id: ${uid}`);

if (!uid) {
  console.log(`user_id not found. Setting user_id and token`);
  localStorage.setItem("user_id", "mofath2021");
  localStorage.setItem("token", "m0f@th2020");
} else {
  console.log(`user_id found : ${uid}`);
  console.log(`clearing the user_id...`);
  localStorage.clear();
}