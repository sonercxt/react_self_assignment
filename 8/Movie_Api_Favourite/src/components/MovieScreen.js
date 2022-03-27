import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MovieDetails from "./MovieDetails";

const MovieScreen = () => {
  const [titleMovie, setTitleMovie] = useState("");
  const [dataMovie, setDataMovie] = useState({});
  const [movie, setMovie] = useState("ring");
  const [filmList, setFilmList] = useState("");

  const handleClickFind = () => {
    setMovie(titleMovie);
  };

  const warningAlert = () => {
    Swal.fire({
      icon: "error",
      title: `"${titleMovie} was not found "`,
      text: "Please enter another film",
    });
  };
  useEffect(() => {
    const showMovieApi = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${movie}&apikey=c520a4c3`
      );
      const data = await response.json();
      data.Response !== "False" ? setDataMovie(data) : warningAlert();
    };
    showMovieApi();
  }, [movie]);

  const showFilm = () => {
    return (
      <div className="col-lg-12">
        <img
          style={{ width: "280px", marginLeft: "75px" }}
          src={dataMovie.Poster}
          alt="poster"
        />
      </div>
    );
  };

  console.log(dataMovie);

  useEffect(() => {
    const movieList = async () => {
      const res = await fetch("http://localhost:8000/films");
      const filmData = await res.json();
      setFilmList(filmData);
    };
    movieList();
  }, []);

  console.log("1", filmList);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-4 mt-3 ms-2 border border-solid "
          style={{ background: "rgba(250,250,250,0.5)" }}
        >
          <div class="input-group mb-3 mt-3">
            <input
              type="text"
              placeholder="Enter a film name"
              value={titleMovie}
              onChange={(e) => setTitleMovie(e.target.value)}
              className="form-control fs-5"
            />
            <button
              class="btn btn-primary btn-outline-secondary text-white"
              type="button"
              id="button-addon2"
              onClick={handleClickFind}
            >
              Find
            </button>
          </div>

          {showFilm()}
        </div>

        <MovieDetails dataMovie={dataMovie}/>
      </div>
    </div>
  );
};

export default MovieScreen;
