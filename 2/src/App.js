import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const randomdata = await response.json();
    setdata(randomdata.results[0]);
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  function acceptData() {
    const newPerson = {
      title: data?.name?.title,
      first: data?.name?.first,
      last: data?.name?.last,
      email: data?.email,
      country: data?.location?.country,
    };
    setSelectedPerson([...selectedPerson, newPerson]);
    getData();
  }

  const refusePerson = () => {
    getData();
  };

  const sortPerson = () => {
    let template = selectedPerson.map((person) => (
      <li>
        {person.first} {person.last} - {person?.email} - {person?.country}
      </li>
    ));

    return template;
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-3 border border-solid p-3">
          <div className="d-flex align-items-center flex-column">
            <figure>
              <img
                src={data?.picture?.large}
                className="rounded-circle img-thumbnail"
                alt="person"
              />
            </figure>
            <p>my name is : </p>
            <h3>
              {data?.name?.first} {data?.name?.last}
            </h3>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              onClick={refusePerson}
              className="btn btn-danger"
            >
              Unlike
            </button>

            <button
              type="button"
              onClick={acceptData}
              className="btn btn-primary"
            >
              Like
            </button>
          </div>
        </div>

        <div
          className="col-lg-5 border border-solid ms-5 overflow-scroll shadow-sm"
          id="results"
        >
          <ul className="list-unstyled">{sortPerson()}</ul>
        </div>
      </div>
    </div>
  );
}
export default App;
