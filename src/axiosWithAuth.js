import axios from "axios";

// axios.defaults.baseURL = "https://gtcag.herokuapp.com";
// axios.defaults.headers.common['Authorization'] = getAuthToken();

export function axiosAuth() {
  const token = localStorage.getItem("authToken");

  return axios.create({
    baseURL: "https://gtcag.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
}
