const axios = require('axios');

var submitRegister = (username, password) => {
  axios
    .post('http://127.0.0.1:5000/register', {
      username: username,
      password: password
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

var submitLogin = () => {};

module.exports = {
  submitLogin,
  submitRegister
};
