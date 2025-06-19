import { describe, it, expect, vi } from 'vitest'
import { fetchUpcomingMovies } from './tmdb.js'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '479033e6787d57fcf1593d1300e57d77'

describe('fetchUpcomingMovies', () => {
  it('builds the expected URL', async () => {
    const json = vi.fn().mockResolvedValue({ results: [] })
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json })

    await fetchUpcomingMovies(2)

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`
    )
  })

  it('throws an error for non-200 responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 })

    await expect(fetchUpcomingMovies()).rejects.toThrow('TMDb error 500')
  })
})
