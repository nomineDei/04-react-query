import axios from "axios";
const myKey = import.meta.env.VITE_TMDB_TOKEN;
import type { Movie } from "../types/movie";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${myKey}`,
    "Content-Type": "application/json",
  },
});

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies(
  query: string,
  page = 1
): Promise<MovieResponse> {
  const response = await api.get<MovieResponse>("/search/movie", {
    params: { query, page },
  });

  return response.data;
}
