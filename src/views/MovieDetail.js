import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { MoviesService } from '../api/MoviesService';

import { GenreCard } from '../styles/GenreCard';
import { MovieInformation } from '../styles/MovieInformation';
import { Wrapper } from '../styles/Wrapper';
export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])

    const fetchMovie = async () => {
      const { data }  = await MoviesService.getMovieById(id);
      setMovie(data);
      setGenres(data.genres);
    }
  
    useEffect (() => {
      fetchMovie()
    }, [])

    return(
        <MovieInformation>
       
        <img src={MoviesService.loadImage(300, movie.poster_path)} alt={movie.title}/>
        

        <div>
        <h1>{movie.title}</h1>
        {genres.map(g => <GenreCard>{g.name}</GenreCard>)}
        <Wrapper>
          <h4>Original title: </h4>
          <p>{movie.original_title}</p>
        </Wrapper>
        <Wrapper>
          <h4>Release date: </h4>
          <p>{movie.release_date}</p>
        </Wrapper>
        <Wrapper>
          <h4>Overview: </h4>
          <p>{movie.overview}</p>
        </Wrapper>
        </div>
        </MovieInformation>
    )
    
}