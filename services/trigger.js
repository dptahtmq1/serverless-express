const request = require('superagent');
const BASE_URI = 'http://localhost:3000'

const trigger = (id) => {
  return new Promise((resolve, reject) => {
    request.get(`${BASE_URI}/users`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

module.exports = {
  trigger: trigger
};