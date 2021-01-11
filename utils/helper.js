const authService = 'http://34.123.190.106/auth-service'
const axios = require('axios');

exports.loginSuperAdmin = async () => {
  try {
    const res = await axios.post(`${authService}/auth`, {
      userId: "Super Admin",
      password: "889a3a791b3875cfae413574b53da4bb8a90d53e"
    });

    return res.data.jwtToken
  } catch (err) {
    console.error(err);
  }
};