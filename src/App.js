import { useState } from "react";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPagge";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <TopPage />
    </div>
  );
}

export default App;
