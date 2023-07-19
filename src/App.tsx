import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import logo from "./logo.svg";
import "./App.css";
import getMovies from "./services/getMovies";
import Search from "./components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import searchMovies from "./services/searchMovies";
const HomePage = () => (
  <>
    <div className="">
      <header className="App-header">
        <Search />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
);

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<any>([]);

  console.log(searchParams);

  useEffect(() => {
    if (searchParams.get("search") !== null) {
      return searchMovies(searchParams.get("search")).then((data) =>
        setResult(data.results)
      );
    }
  }, [searchParams]);

  return <div>{searchParams.get("search")}</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
