import axios from "axios";
const API_KEY = "ef678067b92f6e77a1e5295418217943";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMoviesById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}
