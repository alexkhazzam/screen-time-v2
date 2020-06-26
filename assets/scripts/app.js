import { HandleInputs } from "./Components/HandleInputs.js";
import { ClearMovies } from "./App/ClearMovies.js";
import { SearchMovie } from "./Components/SearchMovie.js";
import { StorageHandler } from "./App/StorageHandler.js";

export let listOfMovies = [];

class App {
  fetchHandleInputs() {
    const handleInputs = new HandleInputs();
    handleInputs.fetchUserInfo();
  }
  searchMovies() {
    const searchMovie = new SearchMovie();
    searchMovie.filterStorage();
    searchMovie.filterMovieList();
  }
  clearMovies(boolean) {
    const clearMovies = new ClearMovies();

    if (boolean) {
      clearMovies.verifyList(true);
      return;
    }
    clearMovies.verifyList(false);
  }
}

const submitBtn = document.querySelector(".submit-movie-information");
submitBtn.addEventListener("click", () => {
  const app = new App();
  app.fetchHandleInputs();
});

const searchMovieBtn = document.querySelector(".submit-movie-search");
searchMovieBtn.addEventListener("click", () => {
  const app = new App();
  app.searchMovies();
});

const clearMoviesBtn = document.querySelector(".clear-movies");
clearMoviesBtn.addEventListener("click", () => {
  const app = new App();
  app.clearMovies(true);
});

const clearSearchedMoviesBtn = document.querySelector(".clear-searched");
clearSearchedMoviesBtn.addEventListener("click", () => {
  const app = new App();
  app.clearMovies(false);
});

const storageHandler = new StorageHandler();
storageHandler.fetchPreviousListItems();
