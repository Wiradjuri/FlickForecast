import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('watchlist');
    if (saved) {
      setWatchlist(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">⭐ My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">You haven’t added any movies yet!</p>
      ) : (
        <div className="grid gap-6">
          {watchlist.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
}
