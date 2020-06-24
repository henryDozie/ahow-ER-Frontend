import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  //baseURL: "https://afternoon-coast-26036.herokuapp.com/"
});

// AUTH

// LOGIN
export const loginUser = async (loginData) => {
  console.log("logging in!")
  console.log(loginData)
  const resp = await api.post("/auth", loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem("authToken", resp.data.auth_token);

  // You are not returning below keys from your restAPI
  // localStorage.setItem("name", resp.data.user.name);`
  // localStorage.setItem("email", resp.data.user.email);
  return resp.data.user;
};

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post("/signup", registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem("authToken", resp.data.auth_token);

    // You are not returning below keys from your restAPI
    // localStorage.setItem("name", resp.data.user.name);
    // localStorage.setItem("email", resp.data.user.email);
    return resp.data.user;
  } catch (e) {
    if (e.response.status === 422) {
      return {
        errorMessage:
          "Email is already associated with a user, please login to continue",
      };
    }
  }
};

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
};

// eREQUESTS
// GET ALL eREQUESTS
export const indexErequests = async () => {
  const resp = await api.get("/erequests");
  return resp.data;
};

//POST a eREQUEST
export const postErequests = async (postData) => {
  const resp = await api.post("/erequests", postData);
  return resp.data;
};

//PASSWORD FORGOT
export const forgotUser = async (email) => {
  const resp = await api.post(`password/forgot`, email);
  return resp.data;
};

//PASSWORD RESET
export const resetUser = async (resetData) => {
  const resp = await api.post(`password/reset`, resetData);
  return resp.data;
};

// UPDATE eREQUESTS
export const putErequests = async (id, postData) => {
  const resp = await api.put(`/erequests/${id}`, postData);
  const erequests = { title: id, shipping_address: resp.data.data };
  return erequests;
};
