import { listOfMovies } from "../app.js";

export class HandleInputs {
  constructor() {
    this.movieList = document.querySelector(".movie-list");
    this.movie = document.querySelector(".movie-title");
    this.genre = document.querySelector(".movie-genre");
    this.rating = document.querySelector(".movie-rating");
  }
  fetchUserInfo() {
    let movieVal = this.movie.value.trim();
    let genreVal = this.genre.value.trim();
    let ratingVal = this.rating.value.trim();
    if (movieVal === "" || genreVal === "" || ratingVal === "") {
      this.reset();
      throw Error(alert("Enter a valid movie title, genre and rating."));
    }
    if (ratingVal > 5 || ratingVal < 0) {
      this.reset();
      throw Error(alert("Enter a rating between 1 and 5"));
    } else {
      this.movieObj = {
        movie: movieVal,
        genre: genreVal,
        rating: ratingVal,
      };
      listOfMovies.push(this.movieObj);
      this.appendToDOM();
      this.reset();
    }
  }
  appendToDOM() {
    let movie = this.movieObj.movie;
    let genre = this.movieObj.genre;
    let rating = this.movieObj.rating;
    let movieElement = `${movie} : ${genre} | ${rating}`;
    const li = document.createElement("li");
    li.textContent = movieElement;
    li.id = Math.random();
    this.movieList.append(li);

    window.localStorage.setItem(li.id, JSON.stringify(li.textContent));

    li.scrollIntoView({ behavior: "smooth" });

    li.addEventListener("click", () => {
      window.localStorage.removeItem(JSON.parse(li.id));
      li.parentElement.removeChild(li);
      let index = listOfMovies.indexOf(li);
      listOfMovies.splice(index, 1);
    });
  }
  reset() {
    this.movie.value = "";
    this.genre.value = "";
    this.rating.value = "";
  }
}
