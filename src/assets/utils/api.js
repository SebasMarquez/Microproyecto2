import axios from "axios";

export async function fetchMovies() {
    return axios.get("https://api.themoviedb.org/3/movie/550?api_key=428538d5b63d291ad96a6986e7923d72");
  }

