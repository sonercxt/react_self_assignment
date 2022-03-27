import MovieScreen from "./components/MovieScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
// import { useState } from "react";

const App = () => {
  // const [dataFilm, setDataFilm] = useState("");

  // const showData = (pFilm) => {
  //   let newFilm = {
  //     "Title":pFilm.Title,
  //     "Year": pFilm.Year,
  //     "Imdb": pFilm.imdbRating,
  //     "Genre": pFilm.Genre,
  //     "Runtime":pFilm.Runtime
  // }
  //   setDataFilm([...dataFilm, newFilm]);
  // };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row bg-primary">
          <nav>
            <ul className="list-unstyled d-flex justify-content-start text-white fs-4 pt-2 ps-4">
              <li>
                <Link Link className="text-white text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="ms-5 ">
                <Link
                  className="text-white text-decoration-none"
                  to="/MovieList"
                >
                  Favourites
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MovieScreen  />} />
        <Route path="/MovieList" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
