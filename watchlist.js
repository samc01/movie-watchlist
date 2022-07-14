const mainWatchlist = document.getElementById("main-watchlist")
const removeBtn = document.getElementById("remove-btn")

mainWatchlist.innerHTML = `<div class="main-placeholder">
                                <p>Your watchlist is looking a little empty...</p>
                                <a href="index.html">
                                    <img src="images/plus-icon.png">
                                    <p>Let's add some movies!</p>
                                </a>
                            </div>`