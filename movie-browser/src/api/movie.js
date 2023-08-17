import axios from "axios";
import { AUTHORIZATION_TOKEN } from "../config";
//https://api.themoviedb.org/3/movie/11?api_key=API_KEY
const headers = {
  accept: "application/json",
  Authorization: AUTHORIZATION_TOKEN,
};
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers,
});
