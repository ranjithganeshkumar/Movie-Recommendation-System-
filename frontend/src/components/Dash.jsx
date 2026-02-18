import { useEffect, useState } from "react";
import "./style.css";

function Dash() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/movies")
      .then(res => res.json())
      .then(data => setMovies(data.movies));
  }, []);

  const getRecommendations = async () => {
    if (!selectedMovie) return;

    const res = await fetch(
      `http://127.0.0.1:8000/recommend/${selectedMovie}`
    );
    const data = await res.json();
    setRecommendations(data.recommendations);
  };

  const filteredMovies = movies.filter(movie =>
    movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className="app">

    {/* HEADER */}
    <header className="header">
      <div className="header-content">
        <h1 className="logo">MovieRecommender</h1>

        {/* SEARCH WRAPPER */}
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Search Dropdown */}
          {searchTerm && (
            <div className="search-dropdown">
              {filteredMovies.slice(0, 6).map((movie, index) => (
                <div
                  key={index}
                  className={`dropdown-item ${
                    selectedMovie === movie ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedMovie(movie);
                    setSearchTerm(movie);
                  }}
                >
                  {movie}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>

    {/* HERO SECTION */}
    <section className="hero">
      <h2>Select a Movie to Get Recommendations</h2>

      {selectedMovie && (
        <div className="selected-movie">
          🎥 {selectedMovie}
        </div>
      )}

      <button
        className="recommend-btn"
        onClick={getRecommendations}
        disabled={!selectedMovie}
      >
        Get Recommendations
      </button>
    </section>

    {/* RECOMMENDATIONS */}
    {recommendations.length > 0 && (
      <section className="recommendations">
        <h2>Recommended For You</h2>

        <div className="recommendation-grid">
          {recommendations.map((movie, index) => (
            <div key={index} className="recommendation-card">
              <div className="poster">🎬</div>
              <p>{movie}</p>
            </div>
          ))}
        </div>
      </section>
    )}
  </div>
);

}

export default Dash;
