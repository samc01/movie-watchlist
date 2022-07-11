
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", searchMovies)

function searchMovies() {
    fetch("http://www.omdbapi.com/?apikey=455c65d7&s=mission")
        .then(res => res.json())
        .then(data => console.log(data))
}


