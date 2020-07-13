import css from "bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
   
    set movie(movie) {
       this._movie = movie;
       this.render();
   }
 
   render() {
        this.shadowDOM.innerHTML = `
            <style>
                ${css}
            </style>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="https://api.themoviedb.org/3/movie/${this._movie.id}/images?api_key=ae84960d2a730781bdef0232da6235f2&language=en-US" class="card-img" alt="Movie Poster">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${this._movie.original_title}</h5>
                    <p class="card-text">${this._movie.overview}</p>
                    <p class="card-text"><small class="text-muted">Release Date: ${this._movie.release_date}</small></p>
                    </div>
                </div>
                </div>
            </div>            
        `;
   }
}
 
customElements.define("movie-item", MovieItem);