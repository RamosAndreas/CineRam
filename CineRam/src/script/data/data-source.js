class DataSource {
    static searchMovies(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ae84960d2a730781bdef0232da6235f2&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            }
            else{
                return Promise.reject(`${keyword} not found`);
            }
        })        
    }
}

export default DataSource;