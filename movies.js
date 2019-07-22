
let movieList = document.getElementById("movieList")
let movieInfo = document.getElementById("movieInfo")
let moviesURL = "http://www.omdbapi.com/?s=batman&apikey=d2532d20"


function showDetails(imdbID) {
    console.log(imdbID)
    let moviesInfoURL = `http://www.omdbapi.com/?i=${imdbID}&apikey=d2532d20`
    let req = new XMLHttpRequest()
    req.open ('GET', moviesInfoURL)
    req.addEventListener('load', () => {

        let movieItem = JSON.parse(event.currentTarget.responseText)

            movieInfo.innerHTML =  `
                                    <h4>Year: ${movieItem.Year}</h4>
                                    <h4>Rating: ${movieItem.Rated}</h4>
                                    <h4>Release: ${movieItem.Released}</h4>
                                    <h4>Director: ${movieItem.Director}</h4>
                                    `
        })

    req.send()
}



let request = new XMLHttpRequest()
request.open ('GET', moviesURL)
request.addEventListener('load', () => {

    let movies = JSON.parse(event.currentTarget.responseText)

    let movieItems = movies.Search.map( movie => {
        return `<div id="movieItem">
                <h3><a href="#" onclick='showDetails("${movie.imdbID}")'>${movie.Title}</a></h3>
                <img src="${movie.Poster}">
                </div>`
    })

    movieList.innerHTML = movieItems.join('')
    
})

request.send()