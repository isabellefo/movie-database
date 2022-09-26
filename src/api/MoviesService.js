import axios from 'axios'
const API_KEY = '99e9ab06cd4bfedc3cd286ebeeacb81b'
const BASE_URL = 'https://api.themoviedb.org/3/'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`


export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }

    static getSimilarMoviesById(id) {
        return axios(withBaseUrl(`movie/${id}/similar`))
    }

    static loadImage(size, path){
        return `${BASE_IMG_URL}${size}/${path}`
    }

}