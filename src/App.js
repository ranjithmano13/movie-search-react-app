import { useState } from "react";
import "./App.css";
import "./styles.css"
import SearchMovie from "./SearchMovie";
import FavouritesList from "./FavouritesList";
import MovieModal from "./MovieModal";

function App() {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };
  const removeFavourite = (movie) => {
    setFavourites(favourites.filter((f) => f.imdbID !== movie.imdbID));
  };
  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <SearchMovie addFavourites={addFavourites} />
      <FavouritesList
        favourites={favourites}
        removeFavourite={removeFavourite}
        showModal={showModal}
      />
      {selectedMovie && (
        <MovieModal
          isModalOpen={isModalOpen}
          movie={selectedMovie}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
