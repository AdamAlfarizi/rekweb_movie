

function getMovies(keyword){
	let xhr = new XMLHttpRequest();

	xhr.onreadytatechange = function(){
		if (xhr.readyState === 4 && xhr.status ===200) {
			let movies = JSON.perse(xhr.response);
			showMovies(movies.Search);		}
	}
	xhr.open('get','http://www.omdbapi.com/?apikey=e09c00d4&s='+ keyword);
	xhr.send();
}
function showMovies(movies){
	let cards = "";
	movies.forEach(function(movie){
		cards += `<div class="col-4 my-3">
              <div class="card">
                <img src="${movie.Poster}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title"> ${movie.Title} </h5>
                  <h5 class="card-subtitle mb-2 text-muted">${movie.Year}</h5>
                  <a href="detail.php?id=${movie.imdbID}" class="btn btn-primary"> Show detail</a>
                </div>
            </div>
          </div>`;
	});
	movieList.innerHTML = cards;
}

let movieList = document.querySelector('.movie-list');

getMovies('naruto');
