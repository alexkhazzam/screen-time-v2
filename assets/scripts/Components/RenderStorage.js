export class RenderStorage {
  constructor() {
    this.moiveListItems = movieListItems = document.querySelectorAll(
      ".movie-list li"
    );
    this.movieList = document.querySelector(".movie-list");
    this.initLiCount = Math.random();
  }
  appendListItemsToStorage() {
    if (this.movieListItems.length === 0) {
      return;
    } else {
      this.moiveListItems.forEach((listItem) => {
        this.initLiCount++;
        window.localStorage.setItem(
          `listItem-${this.initLiCount}`,
          JSON.stringify(listItem)
        );
      });
    }
  }
  fetchPreviousListItems() {
    if (window.localStorage === 0) {
      return;
    } else {
      if (window.localStorage.length === 0) {
        return;
      } else {
        let archive = [];
        for (let i = 0; i <= window.localStorage.length; i++) {
            archive.push(window.localStorage.getItem(localStorage.key(i)));
        }
      }
      archive.forEach((key) => {
          let item = JSON.parse(window.localStorage.getItem(key));
          console.log(item);
          this.movieList.append(item);
      });
    }
  }
}
