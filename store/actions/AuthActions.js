import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_USER } from "./types";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://cpes-project-backend.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const register = (userCredentials) => {
  return async (dispatch) => {
    let response;
    response = await instance
      .post("register/", userCredentials)
      .then(() => dispatch(login(userCredentials)))
      .catch((error) => console.log("error err", error));
  };
};

export const login = (userCredentials) => {
  return async (dispatch) => {
    try {
      let res = await instance.post("login/", userCredentials);
      let user = jwt_decode(res.data.access);
      setAuthToken(res.data.access);
      dispatch({
        type: SET_USER,
        payload: user,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = () => {
  setAuthToken();
  return {
    type: SET_USER,
    payload: null,
  };
};

export const checkForExpiredToken = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      let currentTime = Date.now() / 1000;
      if (currentTime <= jwt_decode(token).exp) {
        setAuthToken(token);
        dispatch({
          type: SET_USER,
          payload: jwt_decode(token),
        });
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = (token) => {
  if (token) {
    AsyncStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    AsyncStorage.removeItem("token", token);
    delete axios.defaults.headers.common.Authorization;
  }
};
