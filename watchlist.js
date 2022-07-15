const mainWatchlist = document.getElementById("main-watchlist")
const removeBtn = document.getElementById("remove-btn")

function displayMovies() {
    const savedMovies = JSON.parse(localStorage.getItem("movies"))

    if (savedMovies.length >= 1) {
        for (let i = 0; i < savedMovies.length; i++) {
            mainWatchlist.innerHTML += `<div class="movie-container" id="${savedMovies[i].imdbID}">
                                        <img src="${savedMovies[i].Poster}" class="movie-image">
                                        <div class="movie-info">
                                            <div class="movie-info-title">
                                                <h3>${savedMovies[i].Title}</h3>
                                                <img src="images/star-icon.png">
                                                <p>${savedMovies[i].Value}</p>
                                            </div>
                                            <div class="movie-info-details">
                                                <p class="movie-info-details-duration">${savedMovies[i].Runtime}</p>
                                                <p class="movie-info-details-category">${savedMovies[i].Genre}</p>
                                                <div id="remove-btn" onClick="removeMovie(event)">
                                                    <img src="images/minus-icon.png">
                                                    <p>Remove</p>
                                                </div>
                                            </div>
                                            <p class="movie-info-description">${savedMovies[i].Plot}</p>
                                        </div>
                                    </div>`
        }
    } else {
        mainWatchlist.innerHTML = `<div class="main-placeholder">
                                        <p>Your watchlist is looking a little empty...</p>
                                        <a href="index.html">
                                            <img src="images/plus-icon.png">
                                            <p>Let's add some movies!</p>
                                        </a>
                                    </div>`
    }
}

function removeMovie(event) {
    const movie = event.target.parentElement.parentElement.parentElement.parentElement
    const movieID = movie.getAttribute("id")

    const savedMovies = JSON.parse(localStorage.getItem("movies"))
    const updatedSavedMovies = savedMovies.filter(movie => {
        if (movie.imdbID !== movieID) {
            return movie
        }
    })

    localStorage.setItem("movies", JSON.stringify(updatedSavedMovies))
    
    displayMovies()
}

displayMovies()