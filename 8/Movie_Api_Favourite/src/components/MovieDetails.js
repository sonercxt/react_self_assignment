import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = ({ dataMovie, showData }) => {
  const detailList = () => {
    const details = Object.keys(dataMovie);
    console.log(details);
    details.splice(14, 1);
    details.splice(13, 1);
    details.splice(2, 1);
    details.splice(12, 1);
    details.splice(14, 1);
    details.splice(17, 3);

    let template = details.map((key) => (
      <li className="mt-1">
        <span className="fw-bold">{key}</span>: {dataMovie[key]}
      </li>
    ));

    return template;
  };

  const handleClickAdd = async () => {
    await fetch("http://localhost:8000/films", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataMovie),
    });

    let newFilm = {
      Title: dataMovie.Title,
      Year: dataMovie.Year,
      Imdb: dataMovie.imdbRating,
      Genre: dataMovie.Genre,
      Runtime: dataMovie.Runtime,
    };

    await fetch("http://localhost:8000/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFilm),
    });

    await showData(dataMovie);
  };

  return (
    <div className="col-lg-7 mt-3 ms-5 d-flex justify-content-between">
      <ul className="list-unstyled" style={{ width: "600px" }}>
        {detailList()}
      </ul>
      <button
        className="btn btn-secondary text-center text-white"
        style={{ height: "40px", paddingTop: "6px" }}
        onClick={() => handleClickAdd()}
      >
        <span>
          <FontAwesomeIcon icon={faStar} className="text-white" />
        </span>
        <span> Favourites</span>
      </button>
    </div>
  );
};

export default MovieDetails;
