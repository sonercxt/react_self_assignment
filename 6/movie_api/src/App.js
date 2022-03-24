import { useEffect, useState } from "react";

const App = () => {
  const [titleMovie, setTitleMovie] = useState("ring");
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    const showMovie = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${titleMovie}&apikey=c520a4c3`
      );
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    };

    showMovie();
  }, [titleMovie]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 border border-solid mt-3"
            style={{ margin: "auto" }}
          >
            <div className="row">
              <div className="col-lg-7">
                <div className="col-lg-10">
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Search film"
                   
                    onChange={(e) =>
                      (e.target.value !== "") ? setTitleMovie(e.target.value) : titleMovie
                    }
                  />
                </div>

                <div className="col-lg-9 mt-3">
                  <figure>
                    <img
                      src={movieDetails.Poster}
                      alt="poster"
                      style={{ width: "320px" }}
                      className="mt-3"
                    />
                  </figure>
                </div>
              </div>

              <div className="col-lg-5 mt-5 p-1">
                <h5 className="mt-4">{movieDetails.Title}</h5>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <span className="fw-bold">Genre: </span>
                    {movieDetails.Genre}
                  </li>
                  <li>{movieDetails.Plot}</li>
                  <li>
                    {" "}
                    <span className="fw-bold">Imdb rating: </span>
                    {movieDetails.imdbRating}
                  </li>
                  <li>
                    {" "}
                    <span className="fw-bold">Year: </span>
                    {movieDetails.Year}
                  </li>
                  <li>
                    {" "}
                    <span className="fw-bold">Actors: </span>
                    {movieDetails.Actors}
                  </li>
                  <li>
                    {" "}
                    <span className="fw-bold">Awards: </span>
                    {movieDetails.Awards}
                  </li>
                  <li>
                    {" "}
                    <span className="fw-bold">Run Time: </span>
                    {movieDetails.Runtime}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
