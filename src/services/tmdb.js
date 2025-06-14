const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '479033e6787d57fcf1593d1300e57d77'; // Your valid TMDb v3 key

// 🟢 Fetch upcoming movies (page is optional, defaults to 1)
export async function fetchUpcomingMovies(page = 1) {
  const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`TMDb error ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('TMDb fetchUpcomingMovies error:', error);
    throw error;
  }
}

// 🟢 Fetch all movie genres and return as array of { id, name }
export async function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`TMDb genre fetch error ${response.status}`);
    }

    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('TMDb fetchGenres error:', error);
    throw error;
  }
}
