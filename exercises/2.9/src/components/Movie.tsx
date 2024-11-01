import { Movie } from "../types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface MovieProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginBottom:'2rem'
      }}>
      {movies.map((movie) => (
        <Card
          key={movie.title}
          sx={{
            border: '1px solid #ddd',
            borderRadius: 5,
            padding: 1,
          }}>
          < CardMedia
            component='img'
            image={movie.image}
            alt={movie.title}
            sx={{
              maxWidth: '25%', height: 'auto', borderRadius: '3px', marginBottom: '0.5rem'
            }}
          />
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 1 }}> {movie.title} - {movie.director}</Typography>
            <Typography variant="body2">{movie.duration} minutes</Typography>
            <Typography variant="body2">{movie.description}</Typography>
            <Typography variant="body2"> Budget: {movie.budget} million</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MovieList;