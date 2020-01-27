import axios from "axios";

// axios.defaults.baseURL = "https://gtcag.herokuapp.com";
// axios.defaults.headers.common['Authorization'] = getAuthToken();

export function axiosAuth() {
  const token = localStorage.getItem("authToken");

  return axios.create({
    // baseURL: "https://gtcag.herokuapp.com",
    baseURL: "http://localhost:4000",

    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
}
