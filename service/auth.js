const sessionIdToUserMap = new Map();

function setUser(id, user) {
  sessionIdToUserMap.set(id, user);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

// const jwt = require("jsonwebtoken");
// const secret = "Sai$12 34 56"

// function setUser(id, user) {
//   const payload = {
//     ...user,
//   };
//   return jwt.sign(payload, secret);
// }

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};
