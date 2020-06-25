export class HandleUserInputs {
    fetchInputs() {
        const movie = document.querySelector(".movie-title");
        const movieGenre = document.querySelector(".movie-genre");
        const movieRating = document.querySelector(".movie-rating");

        if (movie.value.trim() === "" || movieGenre.value.trim() === "" || movieRating.value.trim() === "") {
            return;
        } else {
            console.log(movieValue.value, movieGenre.value, movieRating.value)
        }
    }
}