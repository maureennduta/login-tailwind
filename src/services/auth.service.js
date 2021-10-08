import axios from "axios";

const API_URL = "http://127.0.0.1:2000/";
// REACT_APP_URL = 'http://127.0.0.1:2000'

class AuthService {
  login(username, password) {
    return axios
      .get(API_URL + "register", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response);

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();

// export const AuthService = async (values) => {
//   return await fetch(url + `/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(values),
//   })
//     .then((response) => {
//       console.log(response);
//       return response;
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       return error;
//     });
// };

