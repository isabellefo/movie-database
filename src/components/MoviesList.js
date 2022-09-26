import { Grid } from "../styles/Grid";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies, image}) => (
         <Grid>
            {movies.map(m => <MovieItem key={m.id} movie={m} />)}
        </Grid>
)