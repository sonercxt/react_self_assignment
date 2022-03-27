import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const MovieList = () => {

  const [favourite, setFavourite] = useState("");

  const showDetails = async () => {
    const response = await fetch("http://localhost:8000/favourites");
    const data = await response.json();
    setFavourite(data);
  };

  useEffect(() => {
    showDetails();
  }, []);

  console.log("3", favourite);

  const handleClickDelete = async (pId) => {
    await fetch("http://localhost:8000/favourites/" + pId, {
      method: "DELETE",
    });

    await showDetails();
  };

  const sortFilms = () => {
    if (favourite !== "") {
      let template = favourite.map((film, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{film.Title}</td>
          <td>{film.Genre}</td>
          <td>{film.Year}</td>
          <td>{film.Imdb}</td>
          <td>{film.Runtime}</td>
          <td>
            {" "}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleClickDelete(film.id)}
              className="text-danger"
            />
          </td>
        </tr>
      ));

      return <tbody> {template}</tbody>;
    } else {
      return <tbody>movie not found</tbody>;
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Film Name</th>
              <th scope="col">Genre</th>
              <th scope="col">Year</th>
              <th scope="col">Imdb</th>
              <th scope="col">Run Time</th>
            </tr>
          </thead>
          {sortFilms()}
        </table>
      </div>
    </div>
  );
};

export default MovieList;
