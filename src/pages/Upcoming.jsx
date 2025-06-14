import { useEffect, useState } from 'react'
import { fetchUpcomingMovies, fetchGenres } from '../services/tmdb'
import MovieCard from '../components/MovieCard'

export default function Upcoming() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch movies and genres in parallel
        const [movieResults, genreList] = await Promise.all([
          fetchUpcomingMovies(),
          fetchGenres()
        ])

        // Convert genre array into a lookup map { id: name }
        const genreMap = {}
        genreList.forEach(g => {
          genreMap[g.id] = g.name
        })

        // Enrich each movie with genre names
        const enrichedMovies = movieResults.map(movie => ({
          ...movie,
          genreNames: movie.genre_ids.map(id => genreMap[id]).filter(Boolean)
        }))

        setMovies(enrichedMovies)
      } catch (err) {
        console.error('Error loading upcoming movies or genres:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">🎬 Upcoming Movies</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid gap-6">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
              posterUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/150x220.png?text=No+Image'
              }
              excitement={Math.floor(Math.random() * 4) + 7}
              platform="Cinema"
              genres={movie.genreNames}
            />
          ))}
        </div>
      )}
    </div>
  )
}