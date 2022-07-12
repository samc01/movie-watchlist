
const searchBtn = document.getElementById("search-btn")
const input = document.getElementById("input")
const mainIndex = document.getElementById("main-index")
const moviesArray = []
const moviesInfoArray = []

mainIndex.innerHTML = `<div class="main-placeholder">
                                <img src="images/background-icon.png">
                                <p>Start exploring</p>
                            </div>`

searchBtn.addEventListener("click", displaySearchedMovies)

function searchMovies() {
    input.value &&
        fetch(`http://www.omdbapi.com/?apikey=455c65d7&s=${input.value}`)
            .then(response => response.json())
            .then(data => {
                for (const movie of data.Search) {
                    moviesArray.push(movie.imdbID)
                }
            })
}

function getMoviesInfo() {
    moviesArray.map(id => {
        fetch(`http://www.omdbapi.com/?apikey=455c65d7&i=${id}`)
            .then(response => response.json())
            .then(data => moviesInfoArray.push(data))
    })
}

function renderMovies() {
    mainIndex.innerHTML = ``
    moviesInfoArray.map(movie => {
        mainIndex.innerHTML += `<div class="movie-container">
                                    <img src="${movie.Poster}" class="movie-image">
                                    <div class="movie-info">
                                        <div class="movie-info-title">
                                            <h3>${movie.Title}</h3>
                                            <img src="images/star-icon.png">
                                            <p>${movie.Ratings[0].Value}</p>
                                        </div>
                                        <div class="movie-info-details">
                                            <p class="movie-info-details-duration">${movie.Runtime}</p>
                                            <p class="movie-info-details-category">${movie.Genre}</p>
                                            <div class="add-btn">
                                                <img src="images/plus-icon.png">
                                                <p>Watchlist</p>
                                            </div>
                                        </div>
                                        <p class="movie-info-description">${movie.Plot}</p>
                                    </div>
                                </div>`
    })
}

function displayMovies() {
    searchMovies()
    getMoviesInfo()
    renderMovies()
}

function displaySearchedMovies() {
    mainIndex.innerHTML = ""
    fetch(`http://www.omdbapi.com/?apikey=455c65d7&s=${input.value}`)
        .then(response => response.json())
        .then(data => {
            const searchMoviesArray = data.Search
            for (let i = 0; i < searchMoviesArray.length; i++) {
                fetch(`http://www.omdbapi.com/?apikey=455c65d7&i=${searchMoviesArray[i].imdbID}`)
                    .then(response => response.json())
                    .then(data => {
                        const movieInfo = data
                        mainIndex.innerHTML += `<div class="movie-container">
                                                    <img src="${searchMoviesArray[i].Poster}" class="movie-image">
                                                    <div class="movie-info">
                                                        <div class="movie-info-title">
                                                            <h3>${movieInfo.Title}</h3>
                                                            <img src="images/star-icon.png">
                                                            <p>${movieInfo.Ratings[0].Value}</p>
                                                        </div>
                                                        <div class="movie-info-details">
                                                            <p class="movie-info-details-duration">${movieInfo.Runtime}</p>
                                                            <p class="movie-info-details-category">${movieInfo.Genre}</p>
                                                            <div class="add-btn">
                                                                <img src="images/plus-icon.png">
                                                                <p>Watchlist</p>
                                                            </div>
                                                        </div>
                                                        <p class="movie-info-description">${movieInfo.Plot}</p>
                                                    </div>
                                                </div>`
                    })
            }
        })
}