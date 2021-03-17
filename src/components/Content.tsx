import { MovieCard } from '../components/MovieCard';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: Array<MovieProps>
}

export function Content({ movies }: ContentProps) {
  return (
    <main>
      <div className="movies-list">
         {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
      </div>
    </main>
  )
}