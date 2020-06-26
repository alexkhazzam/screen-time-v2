import { listOfMovies } from "../assets copy/scripts/app.js";

export class ClearMovies {
  constructor() {
    this.movieList = document.querySelector(".movie-list");
    this.searchedList = document.querySelector(".searched-movies");
  }
  verifyList(boolean) {
    if (boolean === true) { //true
      this.movieList.textContent = "";
      this.searchedList.textContent = "";
      listOfMovies.length = 0;
    } else { //false
      this.searchedList.textContent = "";
    }
  }
}
