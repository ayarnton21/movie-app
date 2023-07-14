import { GetMovieType } from "./getMovieType";

const getMovies = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=247f82a4aaa7372b17b2c479e23701b0&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((data: GetMovieType) => data)
    .catch((err) => console.error(err));
};

export default getMovies;
