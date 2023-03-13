import { useState } from "react";
import { fetchMovies } from "../utils/api";

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const getMovies = async () => {
        setLoading(true);
        const { data } = await fetchMovies();
        setMovies(data.results);
        setLoading(false);
    };

    const getSingleMovie = async (movieId) => {
        setLoading(true);
        const { data } = await fetchSingleMovie(MovieId);
        setMovie(data);
        setLoading(false);
    };

    return {
        movies,
        movie,
        isLoading,
        getMovies,
        getSingleMovie,
    };
}