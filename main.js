console.log("Welcome to our Application")

const searchInput = document.getElementById("searchMovie")
const movieContainer = document.querySelector(".container")

// Request Omdb Api
// http://www.omdbapi.com/?i=tt3896198&apikey=f56cba68

searchInput.addEventListener("input",fetchData);

function fetchData() {
    fetch(`http://www.omdbapi.com/?apikey=f56cba68&s=${searchInput.value}`)

        .then(response=>response.json())
        .then((response)=>{
            console.log(response['Search']);

            displayMovies(response['Search']);
        })
        .catch(err=>console.log("Error : ",err));
    }

function displayMovies(Movies){

    let html ="";

    Movies.forEach((element,index) => {
        console.log("Index : ");
        console.log(index);

        console.log("Element : ");
        console.log(element);

    html +=`
            <div class="movie">
                <img src="${element.Poster}" alt="">
                <h3>${element.Title}</h3>
                <p>${element.Year}</p>

                <button><a href ="/details.html?id=${element.imdbID}">View More</a></button>

            </div> 
    
            `;
    });
    movieContainer.innerHTML = html;
}