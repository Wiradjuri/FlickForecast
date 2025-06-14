export default function MovieCard({
  title,
  overview,
  releaseDate,
  posterUrl,
  excitement,
  platform,
  genres = [],
}) {
  function addToWatchlist() {
    const saved = localStorage.getItem('watchlist');
    const existing = saved ? JSON.parse(saved) : [];

    const alreadyAdded = existing.some((m) => m.title === title);
    if (alreadyAdded) {
      alert(`"${title}" is already in your Watchlist.`);
      return;
    }

    const newMovie = {
      title,
      overview,
      releaseDate,
      posterUrl,
      excitement,
      platform,
      genres,
    };

    localStorage.setItem('watchlist', JSON.stringify([...existing, newMovie]));
    alert(`✅ Added "${title}" to your Watchlist!`);
  }

  return (
    <div className="bg-zinc-800 rounded-lg shadow-md p-4 flex gap-4 hover:bg-zinc-700 transition">
      <img
        src={posterUrl}
        alt={title}
        className="w-32 h-48 object-cover rounded-md"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-400 mb-2">
            {releaseDate} • {platform}
          </p>
          <p className="text-sm line-clamp-4">{overview}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {genres.map((name) => (
              <span
                key={name}
                className="text-xs bg-blue-600 px-2 py-1 rounded-full text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-yellow-400 font-semibold">
            Excitement: {excitement}/10
          </span>

          <button
            onClick={addToWatchlist}
            className="text-xs bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
          >
            + Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
