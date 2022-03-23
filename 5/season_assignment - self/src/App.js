import { useState } from "react";

const App = () => {
  const [season, setSeason] = useState("spring");
  const [style, setStyle] = useState("none");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let selectedMonth = "";
  const [url, setUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UobO0tPEr6f7vdrfduY5WHn6yMDeCi2mZqoeHsXKrR1LP3FCxdB2G2vh6OR-FWkCQ8c&usqp=CAU"
  );

  const handleChange = (e) => {
    const date = new Date(e.target.value).getMonth();
    selectedMonth = months[date];
    setStyle("block");

    if (date > 1 && date < 5) {
      setSeason("spring");
      setUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UobO0tPEr6f7vdrfduY5WHn6yMDeCi2mZqoeHsXKrR1LP3FCxdB2G2vh6OR-FWkCQ8c&usqp=CAU"
      );
    } else if (date > 4 && date < 8) {
      setSeason("summer");
      setUrl(
        "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Summer-beach-image.jpg"
      );
    } else if (date > 7 && date < 11) {
      setSeason("autumn");
      setUrl(
        "https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg"
      );
    } else if (date > 10 || date < 2) {
      setSeason("winter");
      setUrl("https://c.tadst.com/gfx/600x337/winter-lake.jpg?1");
    }
  };

  return (
    <>
      <input type="date" onChange={handleChange} />
      <h1 className={style}>{season}</h1>
      <h1>{selectedMonth}</h1>
      <figure>
        <img className={style} src={url} alt="" />
      </figure>
    </>
  );
};

export default App;
