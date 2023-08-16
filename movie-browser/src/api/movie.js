import axios from "axios";

//https://api.themoviedb.org/3/movie/11?api_key=API_KEY

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8a177cd4c429badf101ce707fa99b8e7",
  },
});
