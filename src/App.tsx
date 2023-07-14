import React from "react";
import { useQuery } from "react-query";
import logo from "./logo.svg";
import "./App.css";
import getMovies from "./services/getMovies";

function App() {
  const { data, isLoading, isError } = useQuery(
    "get-movies",
    () => getMovies(),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>There is an error</span>;
  }

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
