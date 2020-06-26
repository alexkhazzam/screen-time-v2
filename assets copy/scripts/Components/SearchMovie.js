import { listOfMovies } from "../app.js";
import { storageList } from "../App/StorageHandler.js";

export class SearchMovie {
  constructor() {
    this.filteredMovies = [];
    this.movieList = document.querySelector(".searched-list");
    this.movieTitle = document.querySelector(".searching-movie-title");
  }
  verifyInputs() {
    if (this.movieTitle.value.trim() === "") {
      this.reset();
      throw new Error(alert("Enter a valid movie title."));
    }
  }
  filterStorage() {
    this.verifyInputs();
    storageList.forEach((movie) => {
      let content = movie.textContent;
      let trimmedTitle = content.slice(0, content.lastIndexOf(":"));
      if (trimmedTitle.includes(this.movieTitle.value.trim())) {
        const listItem = document.createElement("li");
        listItem.textContent = content;
        this.movieList.append(listItem);

        listItem.addEventListener("click", () => {
          listItem.parentElement.removeChild(listItem);
        });
      } else {
        return;
      }
    });
  }
  filterMovieList() {
    listOfMovies.forEach((movies) => {
      let { movie } = movies;
      if (movie.includes(this.movieTitle.value.trim())) {
        this.filteredMovies.push(movies);
      } else {
        this.reset();
        throw new Error(alert("Enter a valid movie title"));
      }
    });
    this.filteredMovies.forEach((movie) => {
      let movieTitle = movie.movie;
      let movieGenre = movie.genre;
      let movieRating = movie.rating;
      let movieElement = `${movieTitle} : ${movieGenre} | ${movieRating}`;
      const li = document.createElement("li");
      li.textContent = movieElement;
      this.movieList.append(li);
      li.scrollIntoView({ behavior: "smooth" });

      li.addEventListener("click", () => {
        li.parentElement.removeChild(li);
      });
    });
  }

  reset() {
    this.movieTitle.value = "";
  }
}
