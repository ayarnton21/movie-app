import { GetMovieType } from "../getMovieType";

const searchMovies = (value: string): Promise<GetMovieType> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDdmODJhNGFhYTczNzJiMTdiMmM0NzllMjM3MDFiMCIsInN1YiI6IjYyNDE5ZjllNzA2ZTU2MDA4YmQ3ZDI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Suu_w2LTwMglkPd9KHk8JZJcsupfjwLuCHq5dXar-UU",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${value}%20&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((data: GetMovieType) => data);
  // .catch((err) => console.error(err));
};

export default searchMovies;
