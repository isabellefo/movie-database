import { Link } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";
import { MovieCard } from "../styles/MovieCard";

export const MovieItem = ({movie}) => (
    <Link style={{ textDecoration: 'none' }} to={`movie/${movie.id}`}>
        <MovieCard>
            <img src={MoviesService.loadImage(300, movie.backdrop_path)} alt={movie.title}/>
            <h2>{movie.title}</h2>
        </MovieCard>
    </Link>
)