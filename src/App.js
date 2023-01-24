import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { MovieItem } from "./Components/MovieItem/MovieItem";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const pushMoviesObject = (data) => {
    const addedmovie = [...moviesData];
    addedmovie.push(data);
    setMoviesData(addedmovie);
  };

  return (
    <div className="App">
      <Header pushMoviesObject={pushMoviesObject} />
      <MovieItem deleteItem={setMoviesData} moviesData={moviesData} />
    </div>
  );
}

export default App;
