import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const noPictureUrl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) return <div className="loading"></div>;

  return (
    <section className="movies">
      {movies.map((movie, index) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link key={id} to={`/movies/${id}`} className="movie">
            <article>
              <img src={poster === "N/A" ? noPictureUrl : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
