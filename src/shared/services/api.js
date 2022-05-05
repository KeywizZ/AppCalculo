import axios from "axios";

const APIHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Authorization': {
      toString () {
          return `Bearer ${sessionStorage.getItem('token')}`
      }
  }
};

export const API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  timeout: 5000,
  headers: APIHeaders
})
