import { listOfMovies } from "../app.js";

export const storageList = [];

export class StorageHandler {
  constructor() {
    this.archive = [];
    this.li = document.querySelectorAll("li");
    this.movieList = document.querySelector(".movie-list");
  }
  fetchPreviousListItems() {
    for (let i = 0; i <= window.localStorage.length; i++) {
      this.archive.push(
        JSON.parse(window.localStorage.getItem(localStorage.key(i)))
        );
    }
    this.archive.forEach((li) => {
      const listItem = document.createElement("li");
      listItem.textContent = li;

      if (listItem.textContent === "") {
        return;
      } else {
        this.movieList.append(listItem);
        storageList.push(listItem);

        listItem.addEventListener("click", () => {
          listItem.parentElement.removeChild(listItem);
          let index = storageList.indexOf(listItem);
          storageList.splice(index, 1);
          window.localStorage.removeItem(window.localStorage.key(listItem.id));
        });
      }
    });
  }
}
