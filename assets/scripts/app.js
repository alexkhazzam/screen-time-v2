import { HandleUserInputs } from "./Components/HandleUserInputs";
import { AppendToList } from "./App/AppendToList.js";
import { SearchList } from "./App/SearchList.js";
import { RenderStorage } from "./Components/RenderStorage.js";

class App {
    fetchClasses() {
        alert("THIS DOESNT WORK")
        const handleUserInput = new HandleUserInputs(); 
        handleUserInput.fetchInputs();
        const renderStorage = new RenderStorage();
        renderStorage.fetchPreviousListItems();
    }   
}

const submitMovieInfo = document.querySelector(".submit-movie-information");
const app = new App();
submitMovieInfo.addEventListener("click", () => {
    alert("hi")
    app.fetchClasses.bind(app);
})